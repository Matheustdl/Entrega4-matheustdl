import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { getRounds, hashSync } from 'bcryptjs';
import Contact from './contacts.entities';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45 })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 14 })
    phone: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: string;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}

export { User };
