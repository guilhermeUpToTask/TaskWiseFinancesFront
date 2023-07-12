import { Dayjs } from "dayjs";
import * as ANN_CONSTANTS from "./constants/annotations";
import * as OPERATION_CONSTANTS from "./constants/walletOperations";

export type AnnotationType = typeof ANN_CONSTANTS.BILL_TYPE | typeof ANN_CONSTANTS.PAYMENT_TYPE;

export type OperationType = typeof OPERATION_CONSTANTS.INCOME_TYPE | typeof OPERATION_CONSTANTS.EXPANSE_TYPE;

export type AnnotationStatus = typeof ANN_CONSTANTS.PENDENT_STATUS | typeof ANN_CONSTANTS.EXPIRED_STATUS |
    typeof ANN_CONSTANTS.PAYED_STATUS | typeof ANN_CONSTANTS.RECIVED_STATUS;

export type Annotation = {
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


export type WalletOperation = {
    id : number
    type : OperationType
    name : string 
    value : number 
    description : string 
    date :  Dayjs
}