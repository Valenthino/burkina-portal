-- Drop existing tables if they exist (in reverse order of dependencies)
DROP TABLE IF EXISTS service_requirements CASCADE;
DROP TABLE IF EXISTS communication_templates CASCADE;
DROP TABLE IF EXISTS application_workflows CASCADE;
DROP TABLE IF EXISTS application_documents CASCADE;
DROP TABLE IF EXISTS document_templates CASCADE;
DROP TABLE IF EXISTS workflow_steps CASCADE;
DROP TABLE IF EXISTS workflow_templates CASCADE;
DROP TABLE IF EXISTS service_access_logs CASCADE;
DROP TABLE IF EXISTS rate_limits CASCADE;
DROP TABLE IF EXISTS service_status CASCADE;
DROP TABLE IF EXISTS security_logs CASCADE;
DROP TABLE IF EXISTS staff_services CASCADE;
DROP TABLE IF EXISTS service_departments CASCADE;
DROP TABLE IF EXISTS department_regions CASCADE;
DROP TABLE IF EXISTS activity_logs CASCADE;
DROP TABLE IF EXISTS role_permissions CASCADE;
DROP TABLE IF EXISTS permissions CASCADE;
DROP TABLE IF EXISTS staff CASCADE;
DROP TABLE IF EXISTS departments CASCADE;
DROP TABLE IF EXISTS regions CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;
DROP TABLE IF EXISTS feedback CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS ministries CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create base tables
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ministries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    short_name VARCHAR(100),
    minister VARCHAR(255),
    description TEXT,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    ministry_id INTEGER REFERENCES ministries(id),
    category VARCHAR(100),
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create enum type for roles
CREATE TYPE role_level AS ENUM (
    'super_admin',
    'ministry_admin',
    'department_head',
    'region_head',
    'supervisor',
    'reviewer',
    'agent'
);

-- Create organizational structure tables
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

CREATE TABLE IF NOT EXISTS regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) NOT NULL UNIQUE,
    capital VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY,
    ministry_id INTEGER REFERENCES ministries(id),
    name VARCHAR(255) NOT NULL,
    short_name VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

-- Create staff and service management tables
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

-- Create workflow and document management tables
CREATE TABLE IF NOT EXISTS workflow_templates (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    estimated_duration INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS workflow_steps (
    id SERIAL PRIMARY KEY,
    workflow_id INTEGER REFERENCES workflow_templates(id),
    step_number INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    required_role role_level,
    estimated_duration INTEGER,
    is_mandatory BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS document_templates (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    template_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create security and monitoring tables
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

CREATE TABLE IF NOT EXISTS service_access_logs (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    user_id INTEGER REFERENCES users(id),
    staff_id INTEGER REFERENCES staff(id),
    access_type VARCHAR(50),
    status VARCHAR(50),
    response_time INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rate_limits (
    id SERIAL PRIMARY KEY,
    ip_address VARCHAR(45),
    endpoint VARCHAR(255),
    request_count INTEGER DEFAULT 1,
    window_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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

-- Create application processing tables
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    service_id INTEGER REFERENCES services(id),
    status VARCHAR(50) DEFAULT 'submitted',
    reference_number VARCHAR(50) UNIQUE,
    submitted_data JSONB,
    assigned_to INTEGER REFERENCES staff(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS application_documents (
    id SERIAL PRIMARY KEY,
    application_id INTEGER REFERENCES applications(id),
    document_type_id INTEGER,
    document_url TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    verified_by INTEGER REFERENCES staff(id),
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS application_workflows (
    id SERIAL PRIMARY KEY,
    application_id INTEGER REFERENCES applications(id),
    workflow_id INTEGER REFERENCES workflow_templates(id),
    current_step INTEGER,
    status VARCHAR(50) DEFAULT 'in_progress',
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_staff_ministry ON staff(ministry_id);
CREATE INDEX idx_staff_department ON staff(department_id);
CREATE INDEX idx_staff_region ON staff(region_id);
CREATE INDEX idx_staff_role ON staff(role_id);
CREATE INDEX idx_applications_user ON applications(user_id);
CREATE INDEX idx_applications_service ON applications(service_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_security_logs_event ON security_logs(event_type);
CREATE INDEX idx_security_logs_user ON security_logs(user_id);
CREATE INDEX idx_security_logs_created ON security_logs(created_at);
CREATE INDEX idx_rate_limits_ip ON rate_limits(ip_address, endpoint);

-- Create updated_at triggers function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ministries_updated_at
    BEFORE UPDATE ON ministries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_departments_updated_at
    BEFORE UPDATE ON departments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_staff_updated_at
    BEFORE UPDATE ON staff
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workflow_templates_updated_at
    BEFORE UPDATE ON workflow_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_document_templates_updated_at
    BEFORE UPDATE ON document_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_application_workflows_updated_at
    BEFORE UPDATE ON application_workflows
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 