import React from 'react';
import { COLORS_TABLE } from '../../../lib/constants/colors';
import * as ANNOTATIONS from '../../../lib/constants/annotations';
import * as OPERATIONS from '../../../lib/constants/walletOperations';


type itemType = typeof ANNOTATIONS.BILL_TYPE | typeof ANNOTATIONS.PAYMENT_TYPE
    | typeof OPERATIONS.INCOME_TYPE | typeof OPERATIONS.EXPANSE_TYPE;

interface ICellEventsProps {
    itens: { name: string, type: itemType }[]
    onCellClick: () => void
}

export default function CellEvents(props: ICellEventsProps): React.ReactElement {
    const { itens } = props;

    const CellEventsStyle: React.CSSProperties = {
        width: '100%',
        display: 'flex',
        gap: '2px',
        flexFlow: 'wrap'
    }

    const ItemStyle: React.CSSProperties = {
        margin: '0',
        padding: '0.1rem',
        fontSize: '0.8rem',
        fontWeight: '600',
        whiteSpace: 'nowrap', // Set whiteSpace here for individual items
        textOverflow: 'ellipsis',
        overflow: 'hidden', // Hide any overflowing content
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
        height: 'fit-content',

    }

    const renderItems = () => {
        return itens.map((item, index) => {
            return (
                <p key={index}
                    style={{
                        ...ItemStyle,
                        color: COLORS_TABLE[item.type],
                        backgroundColor: COLORS_TABLE[item.type] + '20',
                        border: `1px solid ${COLORS_TABLE[item.type]}`,
                        borderRadius: '1rem',
                    }} >
                    {item.name}
                </p >
            )
        })
    }

    return (
        <section style={{ height: '100%' }} onClick={props.onCellClick}>
            <article style={CellEventsStyle}>
                {renderItems()}
            </article>
        </section>
    )
}