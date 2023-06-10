import React, { useState } from 'react';
import { Modal, Typography, Collapse } from 'antd';
import AnotationForm from './AnotationForm/';
import AnotationList from './AnotationList';
import type { IAnotation } from "../../../lib/types";

import { Dayjs } from 'dayjs';
const { Panel } = Collapse;
const { Title } = Typography;

interface modalProps {
  open: boolean;
  closeModal: () => void;
  date: Dayjs;
  anotations: IAnotation[] | undefined;
}

export default function (props: modalProps) : React.ReactElement{

  /*interface anotationsBlock {
    start: Date;
    end: Date;
  }*/

  //we should use react hooks to store the anotations from select date to not prop drill
  return (
    <Modal
      title={
        <Title level={2} style={{ textAlign: 'center' }}>
          {`Anotations of Day - ${props.date.format('YYYY-MM-DD')}`}
        </Title>
      }
      open={props.open}
      onCancel={props.closeModal}
      onOk={props.closeModal}
      width={1000}
    >
      <AnotationList anotations={props.anotations}/>
      <Collapse  size="large">
        <Panel header="Create new Anotation for this Date" key="1">
          <AnotationForm />
        </Panel>
      </Collapse>
    </Modal>
  )
}
