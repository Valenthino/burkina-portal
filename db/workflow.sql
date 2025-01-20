-- Workflow Definitions
CREATE TABLE IF NOT EXISTS workflow_templates (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    estimated_duration INTEGER, -- in days
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
    estimated_duration INTEGER, -- in hours
    is_mandatory BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Document Templates
CREATE TABLE IF NOT EXISTS document_templates (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    template_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Application Processing
CREATE TABLE IF NOT EXISTS application_documents (
    id SERIAL PRIMARY KEY,
    application_id INTEGER REFERENCES applications(id),
    document_type_id INTEGER REFERENCES document_types(id),
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

-- Communication and Notifications
CREATE TABLE IF NOT EXISTS communication_templates (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    type VARCHAR(50),
    name VARCHAR(255) NOT NULL,
    subject TEXT,
    content TEXT,
    variables JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Service Requirements
CREATE TABLE IF NOT EXISTS service_requirements (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    is_mandatory BOOLEAN DEFAULT TRUE,
    document_type_id INTEGER REFERENCES document_types(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create triggers
CREATE TRIGGER update_workflow_templates_updated_at
    BEFORE UPDATE ON workflow_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_document_templates_updated_at
    BEFORE UPDATE ON document_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_application_workflows_updated_at
    BEFORE UPDATE ON application_workflows
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add some initial workflow templates
INSERT INTO workflow_templates (service_id, name, description, estimated_duration) 
SELECT 
    id,
    title || ' - Processus Standard',
    'Workflow standard pour ' || title,
    CASE 
        WHEN category IN ('Documentation', 'Certification') THEN 5
        WHEN category = 'Urgence' THEN 1
        ELSE 3
    END
FROM services;

-- Add workflow steps
INSERT INTO workflow_steps (workflow_id, step_number, name, description, required_role, estimated_duration, is_mandatory)
SELECT 
    wt.id,
    step_number,
    step_name,
    step_description,
    step_role,
    duration,
    TRUE
FROM workflow_templates wt
CROSS JOIN (
    VALUES 
        (1, 'Réception', 'Réception et vérification initiale des documents', 'agent', 2),
        (2, 'Vérification', 'Vérification approfondie des informations', 'reviewer', 4),
        (3, 'Validation', 'Validation par le superviseur', 'supervisor', 4),
        (4, 'Approbation', 'Approbation finale', 'department_head', 8)
) AS steps(step_number, step_name, step_description, step_role, duration);

-- Add document templates
INSERT INTO document_templates (service_id, name, description, template_data)
SELECT 
    id,
    title || ' - Formulaire Standard',
    'Template standard pour ' || title,
    jsonb_build_object(
        'fields', jsonb_build_array(
            jsonb_build_object('name', 'nom', 'type', 'text', 'required', true),
            jsonb_build_object('name', 'prenom', 'type', 'text', 'required', true),
            jsonb_build_object('name', 'date_naissance', 'type', 'date', 'required', true),
            jsonb_build_object('name', 'lieu_naissance', 'type', 'text', 'required', true),
            jsonb_build_object('name', 'adresse', 'type', 'text', 'required', true),
            jsonb_build_object('name', 'telephone', 'type', 'text', 'required', true),
            jsonb_build_object('name', 'email', 'type', 'email', 'required', false)
        )
    )
FROM services;

-- Add communication templates
INSERT INTO communication_templates (service_id, type, name, subject, content, variables)
SELECT 
    id,
    'email',
    title || ' - Notification Standard',
    'Mise à jour de votre demande - {reference_number}',
    'Cher(e) {nom},\n\nVotre demande {reference_number} a été mise à jour. Statut actuel: {status}.\n\nCordialement,\nPortail des Services Publics',
    '{"nom": "string", "reference_number": "string", "status": "string"}'::jsonb
FROM services;

-- Add service requirements
INSERT INTO service_requirements (service_id, name, description, is_mandatory, document_type_id)
SELECT 
    s.id,
    'Pièce d''identité',
    'Carte d''identité ou passeport valide',
    TRUE,
    dt.id
FROM services s
CROSS JOIN (SELECT id FROM document_types WHERE name = 'Carte Nationale d''Identité' LIMIT 1) dt; 