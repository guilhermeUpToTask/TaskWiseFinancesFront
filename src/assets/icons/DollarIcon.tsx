import React from 'react';

interface IDollarIconProps {
    style:React.CSSProperties
}

export default function DollarIcon(props: IDollarIconProps): React.ReactElement {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M27.71 0C12.4067 0 0 12.4067 0 27.71C0 43.0133 12.4067 55.42 27.71 55.42C43.0133 55.42 55.42 43.0133 55.42 27.71C55.42 12.4067 43.0133 0 27.71 0ZM27.71 49.878C15.4659 49.878 5.542 39.9541 5.542 27.71C5.542 15.4659 15.4659 5.542 27.71 5.542C39.9541 5.542 49.878 15.4659 49.878 27.71C49.878 39.9541 39.9541 49.878 27.71 49.878ZM29.5573 25.8627V18.4733H36.9467V14.7787H29.5573V11.084H25.8627V14.7787H18.4733V29.5573H25.8627V36.9467H18.4733V40.6413H25.8627V44.336H29.5573V40.6413H36.9467V25.8627H29.5573ZM25.8627 25.8627H22.168V18.4733H25.8627V25.8627ZM33.252 36.9467H29.5573V29.5573H33.252V36.9467Z" fill="black" />
        </svg>
    )
}