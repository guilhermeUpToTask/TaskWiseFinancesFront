import { Dayjs } from "dayjs";

export interface IAnotation {
    name: string,
    id: number,
    description: string,
    type: 'bills' | 'income' | 'expenses',
    color:string,
    value: number,
    date: Dayjs,
    repeat: 'never' | 'daily' | 'weekly' | 'monthly' // on this we create a array if month create 12, if dayly create 31 or 30 if weakly create 4
    status: 'pendent' | 'expired' | 'payed' | 'recived',
}