/*
  # Create routines table

  1. New Tables
    - `routines`
      - `id` (text, primary key): Unique identifier for the routine
      - `department` (text): Department code (CSE, ECE, etc.)
      - `semester` (integer): Semester number
      - `slots` (jsonb): Array of routine slots
      - `created_at` (timestamptz): Creation timestamp
      - `updated_at` (timestamptz): Last update timestamp

  2. Security
    - Enable RLS on `routines` table
    - Add policies for authenticated users
*/

CREATE TABLE routines (
  id text PRIMARY KEY,
  department text NOT NULL,
  semester integer NOT NULL,
  slots jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE routines ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read all routines
CREATE POLICY "Allow authenticated users to read routines"
  ON routines
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow authenticated users to insert routines
CREATE POLICY "Allow authenticated users to insert routines"
  ON routines
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy to allow authenticated users to update their routines
CREATE POLICY "Allow authenticated users to update routines"
  ON routines
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy to allow authenticated users to delete routines
CREATE POLICY "Allow authenticated users to delete routines"
  ON routines
  FOR DELETE
  TO authenticated
  USING (true);