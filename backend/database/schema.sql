-- Create database
CREATE DATABASE IF NOT EXISTS accelerator_bridge;
USE accelerator_bridge;

-- Contact Form Table
CREATE TABLE IF NOT EXISTS contact_forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);

-- Partnership Form Table
CREATE TABLE IF NOT EXISTS partnership_forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  organization_name VARCHAR(255) NOT NULL,
  contact_person_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50),
  organization_description TEXT NOT NULL,
  logo_path VARCHAR(500),
  partnership_description TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_organization (organization_name),
  INDEX idx_created_at (created_at)
);

-- Create uploads directory path storage
-- Note: Actual file uploads will be stored in backend/uploads/ directory
