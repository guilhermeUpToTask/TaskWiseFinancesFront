import React, { useState } from 'react';
import { Calendar } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import AnnotationsModal from './AnnotationsModal';
import Events from './CellEvents';
import fetchAnotations from './fetchAnnotations';
import fetchWalletOperations from './fetchWalletOperations';
import type { Annotation, WalletOperation } from "../../lib/types";
import { useQuery } from 'react-query';


//anotation is misspelleed the right name is annotation
//needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
//date.utc().format('YYYY-MM-DD')
//when going to display or use, we need to convert it to local format
//date.local().format('YYYY-MM-DD')



export default function CalendarSystem(): React.ReactElement {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-01-01'));
  const { data:annotationsData, isLoading:annonIsLoading } 
  = useQuery<Annotation[]>(
    'anotations',
    fetchAnotations
  );
  const { data:operationsData, isLoading:operationsIsLoading}
  = useQuery<WalletOperation[]>(
    'walletOperations',
    fetchWalletOperations
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

  const reducePropsForItems = (annotations : Annotation[], operations : WalletOperation[]) => {
    type itemType = {name: string, type: 'EXPANSE' | 'INCOME' | 'PAYMENT' | 'BILL'}

    const itens :itemType[]= annotations.map(annotation => {
      return {name: annotation.name, type: annotation.type} })

    itens.push(...operations.map(operation => {
    
      return {name: operation.name, type: operation.type} } ));

    return itens;
  }

  const cellRender = (date: Dayjs) => {
    //here we will show the anotations for that day
    //when using onclick, only inside the cell is triggreble not the whole cell

    if (annonIsLoading || !annotationsData || operationsIsLoading || !operationsData)
      return ('Loading...');

  

      // one solution to not filther all the time is to create a object that each day on the month has a key or
      // get from the server the anotations for that date alread filthered, as a object with the key as the date
      // and the value as the anotations for that day.

    const cellAnnotations =  annotationsData.filter(annotation => annotation.date.isSame(date, 'day'));
    const cellOperations = operationsData.filter(operation => operation.date.isSame(date, 'day'));
    
    if (!cellAnnotations || !cellOperations) {
      return null;
    }

    return (
      <Events itens={reducePropsForItems(cellAnnotations, cellOperations)} onCellClick={() => onCellClickHandler(date)} />
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

