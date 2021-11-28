import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id!: number;

  @Column()
  trim_id!: number;

  @Column()
  width?: number;

  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  aspect_ratio?: string;

  @Column()
  wheel_size?: number;
}
