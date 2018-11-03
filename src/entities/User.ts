import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';

import { Matches } from 'class-validator';

@Entity()

export default class User {
  @Column({
    type: 'varchar',
    length: 50,
    primary: true,
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  @Matches(/(?=^.{6,40}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, {
    message: 'Password must have at least 6 characters, 1 capital, 1 lower and 1 number',
  })
  password?: string;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}