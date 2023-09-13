import * as OPERATION_CONSTANTS from "./constants/walletOperations";

export type OperationType = typeof OPERATION_CONSTANTS.INCOME_TYPE | typeof OPERATION_CONSTANTS.EXPANSE_TYPE;

export type AnnotationType = 'bill' | 'payment';
export type AnnotationStatus = 'pendent' | 'expired' | 'payed' | 'recived';
export type AnnotationRepeat = 'never' | 'day' | 'week' | 'month';


//need to find a way to optionaly have id without have conflicts
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
export type NewAnnotation = {
    name: string;
    description: string;
    annon_type: string;
    value: number;
    status: string;
    date: string;
    repeat: string;
}


export type NewWalletOperation = {
    name: string,
    value: number,
    description: string,
    operation_type: OperationType,
    operation_type_id?: number,
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

export interface ICustomIconProps {
    color?: string;
    size?: number;
    style?: React.CSSProperties;
}

export type AnnConfirmPayload = {
    id: number,
    name: string,
    status: AnnotationStatus,
    value: number,
    annon_type: AnnotationType,
}
