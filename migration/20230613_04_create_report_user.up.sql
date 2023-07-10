-- Enums
BEGIN;
DO $$
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
            create type user_role AS ENUM ('author', 'reviewer');
        END IF;
    END
$$;

CREATE TABLE IF NOT EXISTS report_user (
    report_user_id uuid NOT NULL UNIQUE PRIMARY KEY,
    report_id uuid NOT NULL REFERENCES report(report_id),
    user_id uuid NOT NULL REFERENCES "user"(user_id),
    role user_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

COMMIT;
