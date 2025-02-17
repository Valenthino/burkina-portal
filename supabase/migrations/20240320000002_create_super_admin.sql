-- Get the super_admin role id
DO $$
DECLARE
    super_admin_role_id INTEGER;
    user_id UUID;
BEGIN
    -- Get the super_admin role id
    SELECT id INTO super_admin_role_id FROM roles WHERE nom = 'super_admin';

    -- Get the user id from auth.users
    SELECT id INTO user_id FROM auth.users WHERE email = 'v.sawadogo.career@gmail.com';

    -- If the user exists, assign the super_admin role
    IF user_id IS NOT NULL THEN
        -- Insert into utilisateurs_roles if not exists
        INSERT INTO utilisateurs_roles (utilisateur_id, role_id)
        VALUES (user_id, super_admin_role_id)
        ON CONFLICT (utilisateur_id, role_id) DO NOTHING;

        -- Log the action
        INSERT INTO admin_audit_log (action, details)
        VALUES (
            'create_super_admin',
            jsonb_build_object(
                'user_id', user_id,
                'email', 'v.sawadogo.career@gmail.com',
                'role', 'super_admin'
            )
        );
    END IF;
END $$; 