-- Supabase Schema for Accelerator Bridge
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact Forms Table
CREATE TABLE IF NOT EXISTS contact_forms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_email ON contact_forms(email);
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at DESC);

-- Partnership Forms Table
CREATE TABLE IF NOT EXISTS partnership_forms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_name VARCHAR(255) NOT NULL,
  contact_person_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50),
  organization_description TEXT NOT NULL,
  logo_path VARCHAR(500),
  partnership_description TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_partnership_forms_email ON partnership_forms(email);
CREATE INDEX IF NOT EXISTS idx_partnership_forms_organization ON partnership_forms(organization_name);
CREATE INDEX IF NOT EXISTS idx_partnership_forms_created_at ON partnership_forms(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE partnership_forms ENABLE ROW LEVEL SECURITY;

-- Create policies for service role (backend) access
CREATE POLICY "Enable all access for service role" ON contact_forms
  FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Enable all access for service role" ON partnership_forms
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create policies for anon role (read-only for public)
CREATE POLICY "Enable read access for anon" ON contact_forms
  FOR SELECT
  USING (true);

CREATE POLICY "Enable read access for anon" ON partnership_forms
  FOR SELECT
  USING (true);

-- Grant permissions
GRANT ALL ON contact_forms TO service_role;
GRANT ALL ON partnership_forms TO service_role;
GRANT SELECT ON contact_forms TO anon;
GRANT SELECT ON partnership_forms TO anon;
