export const PENDENT_STATUS = 'PENDENT';
export const PAYED_STATUS = 'PAYED';
export const RECIVED_STATUS = 'RECIVED';
export const EXPIRED_STATUS = 'EXPIRED';

export const ANN_STATUS_LIST = {
    PENDENT_STATUS, PAYED_STATUS,
    RECIVED_STATUS, EXPIRED_STATUS
}

export const BILL_TYPE = 'BILL';
export const INCOMING_TYPE = 'PAYMENT';
export const EXPANSE_TYPE = 'EXPANSE';

export const ANN_TYPES_LIST  = {
    BILL_TYPE, INCOMING_TYPE,EXPANSE_TYPE
}

const BILL_COLOR = 'red';
const INCOMING_COLOR = 'blue';

export const ANNOTATION_COLORS = {
    BILL_COLOR,INCOMING_COLOR
}

export const BTN_TABLE = {
    [BILL_TYPE]: 'Pay Bill',
    [INCOMING_TYPE]: 'Receive Payment'
  };