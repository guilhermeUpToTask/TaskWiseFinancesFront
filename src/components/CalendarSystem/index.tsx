import React, { useState } from 'react';
import { Calendar } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import AnnotationsModal from './AnnotationsModal';
import Events from './CellEvents';
import fetchAnnotationsByMonth from './fetchAnnotationsByMonth';
import fetchWalletOperationsByMonth from './fetchWalletOperationsByMonth';
import type { Annotation, WalletOperation } from "../../lib/types";
import { useQuery } from 'react-query';


//anotation is misspelleed the right name is annotation
//needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
//date.utc().format('YYYY-MM-DD')
//when going to display or use, we need to convert it to local format
//date.local().format('YYYY-MM-DD')



export default function CalendarSystem(): React.ReactElement {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const year = selectedDate.year()
  const month = selectedDate.month() + 1;


  const { data: annotationsData, isLoading: annonIsLoading }
    = useQuery<Annotation[]>({
      queryKey: ['annotations', year, month],
      queryFn: () => fetchAnnotationsByMonth(year, month),
    });
  const { data: operationsData, isLoading: operationsIsLoading }
    = useQuery<WalletOperation[]>({
      queryKey: ['operations', year, month],
      queryFn: () => fetchWalletOperationsByMonth(year, month),
    });


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


  const onPanelChange = (date: Dayjs) => {
    setSelectedDate(date);
    //setAnotations(data.filter(x => x.date.isSame(date, 'month')));

  }

  const reducePropsForItems = (annotations: Annotation[], operations: WalletOperation[]) => {
    type itemType = { name: string, type: 'expanse' | 'income' | 'payment' | 'bill' }

    const itens: itemType[] = annotations.map(annotation => {
      return { name: annotation.name, type: annotation.annon_type }
    })

    itens.push(...operations.map(operation => {

      return { name: operation.name, type: operation.operation_type }
    }));

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

    const cellAnnotations = annotationsData.filter(annotation => dayjs(annotation.date).isSame(date, 'day'));
    const cellOperations = operationsData.filter(operation => dayjs(operation.date).isSame(date, 'day'));

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

