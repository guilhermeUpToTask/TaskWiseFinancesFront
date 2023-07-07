import React from 'react';

interface ICellEventsProps {
    items: {
        type: string,
        color: string,
        name: string,
    }[],
    onCellClick: () => void
}

export default function CellEvents(props: ICellEventsProps): React.ReactElement {
    const { items } = props;

    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <p key={index} style={{margin: 0,fontSize: '0.8rem', fontWeight: 600, color: item.color }}>
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