

export class saveResultDto {
    date: Date;
    id_pack: number;
    id_user: number;
    answers: IAnswers[]
}

interface IAnswers {
    id_card: number;
    answer: boolean;
}
