import dayjs, { Dayjs } from "dayjs";
import * as ANN_CONSTANTS from "./constants/annotations";
import * as OPERATION_CONSTANTS from "./constants/walletOperations";

export type OperationType = typeof OPERATION_CONSTANTS.INCOME_TYPE | typeof OPERATION_CONSTANTS.EXPANSE_TYPE;

export type AnnotationType = 'bill' | 'payment';
export type AnnotationStatus = 'pendent' | 'expired' | 'payed' | 'recived';
export type AnnotationRepeat = 'never' | 'daily' | 'weekly' | 'monthly';

export type Annotation = {
    id: number,
    name: string,
    description: string,
    value: number,
    date: string,
    repeat: AnnotationRepeat, // on this we create a array if month create 12, if dayly create 31 or 30 if weakly create 4
    status: AnnotationStatus,
    annon_type: AnnotationType,
    annon_type_id?: number,
}


export type WalletOperation = {
    id: number,
    name: string,
    value: number,
    description: string,
    date: string,
    operation_type: OperationType,
    operation_type_id?: number,
}