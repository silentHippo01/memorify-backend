import { Cards } from "src/cards/cards.entity";
import { Users } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviewhistory')
export class ReviewHistory {

    @PrimaryGeneratedColumn()
    id_history: number;

    @Column()
    revied_date: Date;

    @Column()
    next_review_date: Date;

    @ManyToOne(() => Cards)
    id_card: number;

    @ManyToOne(() => Users)
    id_user: number;

    @Column()
    status: Status;
}

enum Status {
    unlearned = 'unlearned',
    repeat = 'repeat',
    learned = 'learned',
    memorized = 'memorized'
}