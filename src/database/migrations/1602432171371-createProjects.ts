import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProjects1602432171371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
				new Table({
					name: 'project',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',
							default: 'uuid_generate_v4()'
						},
						{
							name: 'name',
							type: 'varchar'
						},
						{
							name: 'status',
							type: 'array',
						},
						{
							name: 'logo',
							type: 'varchar',
						},
						{
							name: 'descricao',
							type: 'varchar',
						},
						{
							name: 'created_at',
							type: 'timestamp',
							default: 'now()',
						},
						{
							name: 'updated_at',
							type: 'timestamp',
							default: 'now()',
						},
					]
				})
			)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('project');
    }

}
