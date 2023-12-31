import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './Product';

@Entity('categories')
export class Category {
  @PrimaryColumn()
  id!: string;
  @Column()
  name: string;

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
