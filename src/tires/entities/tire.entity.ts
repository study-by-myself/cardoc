import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id!: string;

  @Column()
  trim_id!: number;

  @Column()
  front_width?: number;

  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  front_aspect_ratio?: string;

  @Column()
  front_wheel_size?: number;

  @Column()
  rear_width?: number;

  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  rear_aspect_ratio?: string;

  @Column()
  rear_wheel_size?: number;
}
