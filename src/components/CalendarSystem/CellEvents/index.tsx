import React from 'react';
import { COLORS_TABLE } from '../../../lib/constants/colors';
import * as ANNOTATIONS from '../../../lib/constants/annotations';
import * as OPERATIONS from '../../../lib/constants/walletOperations';


type itemType = typeof ANNOTATIONS.BILL_TYPE | typeof ANNOTATIONS.PAYMENT_TYPE 
| typeof OPERATIONS.INCOME_TYPE | typeof OPERATIONS.EXPANSE_TYPE;

interface ICellEventsProps {
    itens:{name: string, type: itemType}[]
    onCellClick: () => void
}

export default function CellEvents(props: ICellEventsProps): React.ReactElement {
    const { itens  } = props;

    const renderItems = () => {
        return itens.map((item, index) => {
            return (
                <p key={index} style={{margin: 0,fontSize: '0.8rem', fontWeight: 600, color: COLORS_TABLE[item.type] }}>
                    {item.name}
                </p>
            )
        })
    }

    return (
        <section onClick={props.onCellClick} style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {renderItems()}
        </section>
    )
}