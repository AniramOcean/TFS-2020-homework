import {IsNotEmpty} from 'class-validator';

export class CardDTO {
    id: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}
