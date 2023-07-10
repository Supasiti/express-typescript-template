-- Enums
BEGIN;

-- Tables
CREATE TABLE IF NOT EXISTS question (
    question_id uuid NOT NULL UNIQUE PRIMARY KEY,
    report_id uuid NOT NULL REFERENCES report(report_id),
    question VARCHAR NOT NULL,
    answer VARCHAR NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CHECK ("order" >= 0)
);

COMMIT;

SELECT manage_auto_updated_at('question');