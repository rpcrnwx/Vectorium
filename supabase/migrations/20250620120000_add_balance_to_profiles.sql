-- Add balance column to profiles table
ALTER TABLE profiles ADD COLUMN balance numeric DEFAULT 0;

-- Set all existing balances to 0
UPDATE profiles SET balance = 0; 