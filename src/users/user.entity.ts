import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birth_date: Date;

    @Column()
    user_avatar: string;
}