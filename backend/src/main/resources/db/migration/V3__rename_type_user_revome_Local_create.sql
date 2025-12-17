-- Atualiza registros existentes (opcional, mas recomendado)
UPDATE app_user
SET type = 'USER'
WHERE type = 'CLIENT';

-- Altera o valor default da coluna type
ALTER TABLE app_user
ALTER COLUMN type SET DEFAULT 'USER';

-- Remove a coluna created_at
ALTER TABLE app_user
DROP COLUMN created_at;
