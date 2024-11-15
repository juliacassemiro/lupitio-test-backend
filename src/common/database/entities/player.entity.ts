import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TeamEntity } from './team.entity';

@Entity({ name: 'players' })
export class PlayerEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'integer' })
  age: number;

  @ManyToOne(() => TeamEntity, (team) => team.id)
  @JoinColumn({ name: 'team_id' })
  team: TeamEntity;
}
