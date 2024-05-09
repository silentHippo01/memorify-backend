import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('cards')
export class Cards {

    @PrimaryGeneratedColumn()
    id_card: number;

    @Column()
    id_pack: number;

    @Column()
    termin: string;

    @Column()
    termin_definition: string;

    @Column()
    avatar_card: string;
}