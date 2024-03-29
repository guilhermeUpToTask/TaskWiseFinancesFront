import React from 'react';
import { ICustomIconProps } from '../../lib/types';

export default function MoneyIcon(props: ICustomIconProps): React.ReactElement {
    return (
        <svg
            style={props.style}
            width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.7562 0H0V39.8125H51.7562V0ZM47.775 35.8313H3.98125V3.98125H47.775V35.8313Z" fill="black" />
            <path d="M55.7375 9.95312V43.7937H9.95312V47.775H59.7188V9.95312H55.7375Z" fill="black" />
            <path d="M25.8781 29.6678C30.8174 29.6678 34.8359 25.2962 34.8359 19.9229C34.8359 14.5496 30.8174 10.1781 25.8781 10.1781C20.9389 10.1781 16.9203 14.5495 16.9203 19.9229C16.9203 25.2964 20.9389 29.6678 25.8781 29.6678ZM25.8781 14.1593C28.6222 14.1593 30.8547 16.7449 30.8547 19.9229C30.8547 23.101 28.6222 25.6865 25.8781 25.6865C23.134 25.6865 20.9016 23.101 20.9016 19.9229C20.9016 16.7449 23.134 14.1593 25.8781 14.1593Z" fill="black" />
            <path d="M11.9438 8.95782H7.9625V30.8547H11.9438V8.95782Z" fill="black" />
            <path d="M43.7937 8.95782H39.8125V30.8547H43.7937V8.95782Z" fill="black" />
        </svg>

    )
}