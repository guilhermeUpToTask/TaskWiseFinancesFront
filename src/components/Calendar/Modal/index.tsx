import React, { useState } from 'react';
import { Modal, Typography, Collapse } from 'antd';
import AnotationForm from './AnotationForm/';
import AnotationList from './AnotationList';
const { Panel } = Collapse;
const { Title } = Typography;

export default function (props: any) : React.ReactElement{
  interface structure {
    name: 'Energy Bill',
    description: '',
    type: 'bills',
    value: 0,
    date: 'this date',
    repeat: 'never' | 'daily' | 'weekly' | 'monthly' // on this we create a array if month create 12, if dayly create 31 or 30 if weakly create 4
    status: 'pendent',
  }

  return (
    <Modal
      title={
        <Title level={3} style={{ textAlign: 'center' }}>
          {`Anotations of Day - ${props.date.format('YYYY-MM-DD')}`}
        </Title>
      }
      open={props.open}
      onCancel={props.closeModal}
      onOk={props.closeModal}
      width={1000}
    >
      <AnotationList/>
      <Collapse  size="large">
        <Panel header="Create new Anotation for this Date" key="1">
          <AnotationForm />
        </Panel>
      </Collapse>
    </Modal>
  )
}
