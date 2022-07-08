<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220708121953 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE role_user DROP CONSTRAINT fk_332ca4ddd60322ac');
        $this->addSql('DROP SEQUENCE role_id_seq CASCADE');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE role_user');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE role_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE role (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE role_user (role_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY(role_id, user_id))');
        $this->addSql('CREATE INDEX idx_332ca4ddd60322ac ON role_user (role_id)');
        $this->addSql('CREATE INDEX idx_332ca4dda76ed395 ON role_user (user_id)');
        $this->addSql('ALTER TABLE role_user ADD CONSTRAINT fk_332ca4ddd60322ac FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE role_user ADD CONSTRAINT fk_332ca4dda76ed395 FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
