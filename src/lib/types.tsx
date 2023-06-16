import { Dayjs } from "dayjs";
import { BILL_TYPE, INCOMING_TYPE, EXPANSE_TYPE } from "./constants/annotations";


export interface IAnotation {
    name: string,
    id: number,
    description: string,
    type: typeof BILL_TYPE | typeof INCOMING_TYPE | typeof EXPANSE_TYPE,
    color:string,
    value: number,
    date: Dayjs,
    repeat: 'never' | 'daily' | 'weekly' | 'monthly' // on this we create a array if month create 12, if dayly create 31 or 30 if weakly create 4
    status: 'pendent' | 'expired' | 'payed' | 'recived',
}