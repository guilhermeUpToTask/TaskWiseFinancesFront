import React, { useState, useEffect } from 'react';
import { Calendar, Typography } from 'antd';
import { CellRenderInfo } from 'rc-picker/lib/interface';
import dayjs, { Dayjs } from 'dayjs';
import  Modal from './Modal';
import Anotations from './Anotations';
import anotationsData from './fakeAnotations';
import type { IAnotation } from "../../lib/types";

//needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
//date.utc().format('YYYY-MM-DD')
//when going to display or use, we need to convert it to local format
//date.local().format('YYYY-MM-DD')

export default function (): React.ReactElement {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-01-01'));
  const [anotations, setAnotations] = useState<IAnotation[]>([]);

  useEffect(() => {
    setAnotations(anotationsData);
  }, []);	
  


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

  const getAnotationsForDate = (date: Dayjs) => {
    if(anotations.length > 0){
      return anotations.filter(anotation => anotation.date.isSame(date, 'day'));
    }else{
      return undefined
    }
  }

  const onPanelChange = (date: Dayjs, mode: string) => {
    //here we need to fetch all the anotations for that month
    console.log(date, mode);
    //setAnotations(data.filter(x => x.date.isSame(date, 'month')));
  
  }

  const cellRender = (date: Dayjs, info: CellRenderInfo<Dayjs>) => {
    //here we will show the anotations for that day
    //when using onclick, only inside the cell is triggreble not the day above
    const cellAnotations = getAnotationsForDate(date);
    if (!cellAnotations) {
      return null;
    }

    const items = cellAnotations.map(a => {
      return {
        name: a.name,
        type: a.type,
        color:a.color
      }
    });

    return (
      <Anotations items={items} onAnotationsClick={() => onCellClickHandler(date)}/>
    );
  };


  return (
    //not best solution in modal anotations, let try to filther the anotations in cellrender if the cell is the selected date
    <>
      <Calendar style={{ maxWidth: '800px' }} mode='month' onPanelChange={onPanelChange}
        cellRender={cellRender} />
    <Modal date={selectedDate} anotations={getAnotationsForDate(selectedDate)} open={open} closeModal={closeModal}   />
    </>
  )
}

