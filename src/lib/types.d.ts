import { Dayjs } from "dayjs";
import * as ANN_CONSTANTS from "./constants/annotations";

export type AnnotationType = typeof ANN_CONSTANTS.BILL_TYPE | typeof ANN_CONSTANTS.INCOMING_TYPE |
    typeof ANN_CONSTANTS.EXPANSE_TYPE;

export type AnnotationStatus = typeof ANN_CONSTANTS.PENDENT_STATUS | typeof ANN_CONSTANTS.EXPIRED_STATUS |
    typeof ANN_CONSTANTS.PAYED_STATUS | typeof ANN_CONSTANTS.RECIVED_STATUS;

export interface IAnotation {
    name: string,
    id: number,
    description: string,
    type: AnnotationType,
    color: string,
    value: number,
    date: Dayjs,
    repeat: 'never' | 'daily' | 'weekly' | 'monthly' // on this we create a array if month create 12, if dayly create 31 or 30 if weakly create 4
    status: AnnotationStatus,
}