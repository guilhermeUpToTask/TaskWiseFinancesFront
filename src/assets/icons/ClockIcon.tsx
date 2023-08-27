import React from 'react';
import { ICustomIconProps } from '../../lib/types';

export default function ClockIcon(props: ICustomIconProps): React.ReactElement {
    return (
        <svg 
        style={props.style}
        width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8897 38.5453L23.0475 27.7031V13.17H29.6325V24.9769L38.5453 33.8897L33.8897 38.5453ZM26.34 0C11.7937 0 0 11.7937 0 26.34C0 40.8863 11.7937 52.68 26.34 52.68C40.8863 52.68 52.68 40.8863 52.68 26.34C52.68 11.7937 40.8863 0 26.34 0ZM26.34 46.095C15.4287 46.095 6.585 37.2513 6.585 26.34C6.585 15.4287 15.4287 6.585 26.34 6.585C37.2513 6.585 46.095 15.4287 46.095 26.34C46.095 37.2513 37.2513 46.095 26.34 46.095Z" fill="black" />
        </svg>

    )
}