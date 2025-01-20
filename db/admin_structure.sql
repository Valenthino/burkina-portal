-- Roles and Permissions
CREATE TYPE role_level AS ENUM (
    'super_admin',
    'ministry_admin',
    'department_head',
    'region_head',
    'supervisor',
    'reviewer',
    'agent'
);

CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level role_level NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS role_permissions (
    role_id INTEGER REFERENCES roles(id),
    permission_id INTEGER REFERENCES permissions(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, permission_id)
);

-- Organizational Structure
CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY,
    ministry_id INTEGER REFERENCES ministries(id),
    name VARCHAR(255) NOT NULL,
    short_name VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) NOT NULL UNIQUE,
    capital VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS department_regions (
    id SERIAL PRIMARY KEY,
    department_id INTEGER REFERENCES departments(id),
    region_id INTEGER REFERENCES regions(id),
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(department_id, region_id)
);

-- Staff Management
CREATE TABLE IF NOT EXISTS staff (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    employee_id VARCHAR(50) UNIQUE,
    ministry_id INTEGER REFERENCES ministries(id),
    department_id INTEGER REFERENCES departments(id),
    region_id INTEGER REFERENCES regions(id),
    role_id INTEGER REFERENCES roles(id),
    supervisor_id INTEGER REFERENCES staff(id),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    status VARCHAR(20) DEFAULT 'active',
    hire_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Service Assignment and Access Control
CREATE TABLE IF NOT EXISTS service_departments (
    service_id INTEGER REFERENCES services(id),
    department_id INTEGER REFERENCES departments(id),
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (service_id, department_id)
);

CREATE TABLE IF NOT EXISTS staff_services (
    staff_id INTEGER REFERENCES staff(id),
    service_id INTEGER REFERENCES services(id),
    can_review BOOLEAN DEFAULT false,
    can_approve BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (staff_id, service_id)
);

-- Audit and Activity Logging
CREATE TABLE IF NOT EXISTS activity_logs (
    id SERIAL PRIMARY KEY,
    staff_id INTEGER REFERENCES staff(id),
    action_type VARCHAR(50) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id INTEGER,
    details JSONB,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create triggers for updated_at columns
CREATE TRIGGER update_departments_updated_at
    BEFORE UPDATE ON departments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_department_regions_updated_at
    BEFORE UPDATE ON department_regions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_staff_updated_at
    BEFORE UPDATE ON staff
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_staff_ministry ON staff(ministry_id);
CREATE INDEX idx_staff_department ON staff(department_id);
CREATE INDEX idx_staff_region ON staff(region_id);
CREATE INDEX idx_staff_role ON staff(role_id);
CREATE INDEX idx_activity_logs_staff ON activity_logs(staff_id);
CREATE INDEX idx_activity_logs_action ON activity_logs(action_type);
CREATE INDEX idx_activity_logs_entity ON activity_logs(entity_type, entity_id); 