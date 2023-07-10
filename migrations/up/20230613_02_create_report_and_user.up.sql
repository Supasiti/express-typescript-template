-- Enums
BEGIN;
DO $$
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'report_status') THEN
            create type report_status AS ENUM ('draft', 'reviewing', 'published');
        END IF;
    END
$$;

-- Tables
CREATE TABLE IF NOT EXISTS report (
    report_id uuid NOT NULL UNIQUE PRIMARY KEY,
    fund VARCHAR NOT NULL,
    status report_status NOT NULL,
    title VARCHAR NOT NULL,
    source VARCHAR,
    prepared_on TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
    user_id uuid NOT NULL UNIQUE PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);

COMMIT;

SELECT manage_auto_updated_at('report');