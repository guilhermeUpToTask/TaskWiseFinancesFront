import {WalletOperation } from "../../lib/types";
import * as OPERATION_CONSTANTS from '../../lib/constants/walletOperations';

const walletOperations : WalletOperation[] = [
    {    
        id: 255,
        operation_type : OPERATION_CONSTANTS.INCOME_TYPE,
        name : 'bico' ,
        value : 23.30 ,
        description : 'um bico feito ai' ,
        date :  '2023-07-01'
    },
    {    
        id: 255,
        operation_type : OPERATION_CONSTANTS.EXPANSE_TYPE,
        name : 'acai' ,
        value : 50 ,
        description : 'açai comprado' ,
        date :  '2023-07-02'
    },
    {    
        id: 255,
        operation_type : OPERATION_CONSTANTS.EXPANSE_TYPE,
        name : 'market' ,
        value : 65.5 ,
        description : 'market expanses' ,
        date :  '2023-07-04'
    },
]

export default walletOperations;