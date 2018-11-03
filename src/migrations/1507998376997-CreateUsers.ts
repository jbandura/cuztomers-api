import {
  ColumnSchema,
  ForeignKeySchema,
  MigrationInterface,
  QueryRunner,
  TableSchema,
} from 'typeorm';

export class CreateUsers1507998376997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      const userTableSchema = new TableSchema('user', [
        new ColumnSchema({
          name: 'id',
          type: 'int4',
          isPrimary: true,
          isGenerated: true,
        }),
        new ColumnSchema({
          name: 'firstName',
          type: 'character varying(100)',
          isNullable: true,
        }),
        new ColumnSchema({
          name: 'lastName',
          type: 'character varying(100)',
          isNullable: true,
        }),
        new ColumnSchema({
          name: 'email',
          type: 'character varying(100)',
          isUnique: true,
        }),
        new ColumnSchema({
          name: 'password',
          type: 'character varying',
        }),
        new ColumnSchema({
          name: 'createdAt',
          type: 'timestamp without time zone',
          default: 'now()',
        }),
        new ColumnSchema({
          name: 'updatedAt',
          type: 'timestamp without time zone',
          default: 'now()',
        }),
      ]);

      queryRunner.createTable(userTableSchema);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      queryRunner.dropTable('user');
    }
}
