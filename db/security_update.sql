-- Add more permissions for specific service types
INSERT INTO permissions (name, code, description) VALUES
('Gestion Documents Confidentiels', 'manage_confidential', 'Accès aux documents classifiés'),
('Validation Biométrique', 'biometric_validation', 'Validation des données biométriques'),
('Gestion des Urgences', 'emergency_manage', 'Gestion des situations d''urgence'),
('Accès International', 'international_access', 'Accès aux services internationaux'),
('Gestion Financière', 'financial_manage', 'Gestion des aspects financiers');

-- Assign new permissions to relevant roles
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r
CROSS JOIN permissions p
WHERE (r.level = 'ministry_admin' AND p.code IN ('manage_confidential', 'financial_manage'))
   OR (r.level = 'department_head' AND p.code IN ('emergency_manage', 'biometric_validation'))
   OR (r.level = 'region_head' AND p.code = 'emergency_manage');

-- Create service assignments for departments
INSERT INTO service_departments (service_id, department_id, is_primary)
SELECT s.id, d.id, TRUE
FROM services s
JOIN departments d ON d.ministry_id = (
    SELECT ministry_id 
    FROM services 
    WHERE id = s.id
)
WHERE d.short_name IN (
    CASE 
        WHEN s.category = 'Documentation' THEN 'DGRH'
        WHEN s.category = 'Sécurité' THEN 'DGPN'
        WHEN s.category = 'Santé' THEN 'DI'
        WHEN s.category = 'Education' THEN 'DE'
        WHEN s.category = 'Finance' THEN 'DC'
        ELSE 'DRH'
    END
);

-- Add staff service assignments
INSERT INTO staff_services (staff_id, service_id, can_review, can_approve)
SELECT 
    s.id,
    srv.id,
    s.role_id IN (SELECT id FROM roles WHERE level IN ('supervisor', 'reviewer')),
    s.role_id IN (SELECT id FROM roles WHERE level IN ('department_head', 'supervisor'))
FROM staff s
CROSS JOIN services srv
WHERE s.department_id IN (
    SELECT department_id 
    FROM service_departments 
    WHERE service_id = srv.id
);

-- Add more secure session management
ALTER TABLE user_sessions 
ADD COLUMN device_id VARCHAR(255),
ADD COLUMN last_activity TIMESTAMP,
ADD COLUMN is_active BOOLEAN DEFAULT TRUE;

-- Add security audit logging
CREATE TABLE IF NOT EXISTS security_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    staff_id INTEGER REFERENCES staff(id),
    event_type VARCHAR(50) NOT NULL,
    event_details JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for security
CREATE INDEX idx_security_logs_event ON security_logs(event_type);
CREATE INDEX idx_security_logs_user ON security_logs(user_id);
CREATE INDEX idx_security_logs_created ON security_logs(created_at);
CREATE INDEX idx_user_sessions_active ON user_sessions(is_active);

-- Add service access tracking
CREATE TABLE IF NOT EXISTS service_access_logs (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    user_id INTEGER REFERENCES users(id),
    staff_id INTEGER REFERENCES staff(id),
    access_type VARCHAR(50),
    status VARCHAR(50),
    response_time INTEGER, -- in milliseconds
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add rate limiting
CREATE TABLE IF NOT EXISTS rate_limits (
    id SERIAL PRIMARY KEY,
    ip_address VARCHAR(45),
    endpoint VARCHAR(255),
    request_count INTEGER DEFAULT 1,
    window_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_rate_limits_ip ON rate_limits(ip_address, endpoint);

-- Add service status tracking
CREATE TABLE IF NOT EXISTS service_status (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    status VARCHAR(50) DEFAULT 'active',
    message TEXT,
    last_checked TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    next_maintenance TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger for service status updates
CREATE TRIGGER update_service_status_updated_at
    BEFORE UPDATE ON service_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Initial service status
INSERT INTO service_status (service_id, status, message)
SELECT id, 'active', 'Service opérationnel'
FROM services; 