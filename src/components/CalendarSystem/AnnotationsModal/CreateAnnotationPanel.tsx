import React from 'react';
import { Collapse } from 'antd';
import WithMsgCreateAnn from './AnnotationForm/CreateAnnotationForm/WithMsgCreateAnn';
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
                <WithMsgCreateAnn selectedDate={props.selectedDate} />
            </Panel>
        </Collapse>
    )
}


