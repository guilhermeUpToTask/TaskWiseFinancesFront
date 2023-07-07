import React, { useState } from 'react';
import { Calendar } from 'antd';
import { CellRenderInfo } from 'rc-picker/lib/interface';
import dayjs, { Dayjs } from 'dayjs';
import AnnotationsModal from './AnnotationsModal';
import Anotations from './CellEvents';
import anotationsData from './fakeAnotations';
import type { IAnotation } from "../../lib/types";
import { filtherAnotations } from "../../lib/functions";
import { useQuery } from 'react-query';


//anotation is misspelleed the right name is annotation
//needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
//date.utc().format('YYYY-MM-DD')
//when going to display or use, we need to convert it to local format
//date.local().format('YYYY-MM-DD')
const fetchAnotations = async (): Promise<IAnotation[]> => {
  try {
    return anotationsData;
  }
  catch (e) {
    return [];
  }
}


export default function CalendarSystem(): React.ReactElement {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-01-01'));
  const { data, isLoading, error, refetch } = useQuery<IAnotation[]>(
    'anotations',
    fetchAnotations
  );


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
    //setAnotations(data.filter(x => x.date.isSame(date, 'month')));

  }

  const getItemsForCellRender = (cellAnotations: IAnotation[]) => {
    return cellAnotations.map(a => {
      return {
        name: a.name,
        type: a.type,
        color: a.color
      }
    });
  }

  const cellRender = (date: Dayjs, info: CellRenderInfo<Dayjs>) => {
    //here we will show the anotations for that day
    //when using onclick, only inside the cell is triggreble not the whole cell

    if (isLoading || !data)
      return ('Loading...');

      // one solution to not filther all the time is to create a object that each day on the month has a key or
      // get from the server the anotations for that date alread filthered, as a object with the key as the date
      // and the value as the anotations for that day.

    const cellAnotations = filtherAnotations(data, date);
    if (!cellAnotations) {
      return null;
    }

    const items = getItemsForCellRender(cellAnotations);

    return (
      <Anotations items={items} onCellClick={() => onCellClickHandler(date)} />
    );
  };


  return (
    <>
      <Calendar style={{ maxWidth: '800px' }} mode='month' onPanelChange={onPanelChange}
        cellRender={cellRender} />
      <AnnotationsModal selectedDate={selectedDate} open={open} closeModal={closeModal} />
    </>
  )
}

