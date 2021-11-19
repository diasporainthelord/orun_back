import { Group } from 'src/group/entities/group.entity';
import { Photo } from 'src/photo/entities/photo.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ unique: true })
  nickName: string;

  @Column({ unique: true })
  phone: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany(() => Photo, (photo) => photo.userId)
  photos: Photo[];

  @ManyToMany(() => Group, (group) => group.users)
  groups: Group[];
}
