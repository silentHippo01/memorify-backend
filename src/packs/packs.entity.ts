import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('packs')
export class Packs {

    @PrimaryGeneratedColumn()
    id_pack: number;

    @Column()
    title_pack: string;

    @Column()
    author_pack: number;

    @Column()
    avatar_packs: string;

    @Column()
    description: string;

    @Column()
    createat: Date;
}