import React, { useState } from 'react';
import { Calendar, Select, Typography, Button } from 'antd';
import { CellRenderInfo } from 'rc-picker/lib/interface';
import dayjs, { Dayjs } from 'dayjs';
import  Modal from './Modal';
import Anotations from './Anotations';

//needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
//date.utc().format('YYYY-MM-DD')
//when going to display or use, we need to convert it to local format
//date.local().format('YYYY-MM-DD')

const { Title } = Typography;

export default function (): React.ReactElement {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-01-01'));

  const showModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  }



  const onCellClickHandler = (date: Dayjs) => {
    setSelectedDate(date);
    showModal();
  }


  const onPanelChange = (date: Dayjs, mode: string) => {
    //here we need to fetch all the anotations for that month
    console.log(date, mode);
  }

  const cellRender = (date: Dayjs, info: CellRenderInfo<Dayjs>) => {
    //here we will show the anotations for that day
    //when using onclick, only inside the cell is triggreble not the day above

    const items = [
      { name: 'Item 1', color: 'red', type: 'bill' },
      { name: 'Item 2', color: 'blue', type: 'expanses' },
      { name: 'Item 3', color: 'green', type: 'incomings'}
    ]

    return (
      <Anotations items={items} onAnotationsClick={() => onCellClickHandler(date)}/>
    );
  };


  return (
    <>
      <Calendar style={{ maxWidth: '800px' }} mode='month' onPanelChange={onPanelChange}
        cellRender={cellRender} />
    <Modal date={selectedDate} open={open} closeModal={closeModal}   />
    </>
  )
}

