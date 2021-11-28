import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 32, nullable: false })
  nickname!: string;

  @Column({ type: 'varchar', length: 140, nullable: false })
  password!: string;
}
