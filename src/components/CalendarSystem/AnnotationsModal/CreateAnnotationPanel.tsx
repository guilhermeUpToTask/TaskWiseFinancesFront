import React from 'react';
import { Collapse } from 'antd';
import ConnectCreateAnnotation from './AnnotationForm/ConnectCreateAnnotation';
import { Dayjs } from 'dayjs';

const { Panel } = Collapse;

interface ICreateAnnotationPanelProps {
    selectedDate: Dayjs;
}

export default function CreateAnnotationPanel(props: ICreateAnnotationPanelProps): React.ReactElement {
    return (

        //another option is to just clear the form and show a succes message

        <Collapse size="large" >
            <Panel header="Create new Anotation for this Date" key="1" >
                <ConnectCreateAnnotation selectedDate={props.selectedDate} />
            </Panel>
        </Collapse>
    )
}


