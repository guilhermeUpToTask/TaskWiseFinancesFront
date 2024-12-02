import React, { useState } from 'react';
import { Calendar, Skeleton } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import AnnotationsModal from './AnnotationsModal';
import Events from './CellEvents';
//import useAnnotationsByMonth from '../../hooks/useAnnotationsByMonth';
import AnnotationService from '../../client/services/annotationService';
import useDataQuery from '../../hooks/useDataQuery';
import useOperationsByMonth from '../../hooks/useOperationsByMonth';
import CalendarHeader from './CalendarHeader';
import { Annotations } from '../../client/models/annotationModel';



//anotation is misspelleed the right name is annotation
//needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
//date.utc().format('YYYY-MM-DD')
//when going to display or use, we need to convert it to local format
//date.local().format('YYYY-MM-DD')



export default function CalendarSystem(): React.ReactElement {

  const [open, setOpen] = useState(false);
  const [monthValue, setMonthValue] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());

  //const { data: annotationsData, isLoading: annonIsLoading }
  //= useAnnotationsByMonth(monthValue);

  const { data: groupedAnnotations, isLoading: groupedAnnotationsIsLoading }
    = useDataQuery(
      ['annotations', monthValue],
      () => AnnotationService.readAnnotationsByMonth({
        year: monthValue.year(), month: monthValue.month()+1,
      })
    );


  //need to group the date of operations aswell
  //const { data: operationsData, isLoading: operationsIsLoading }
    //= useOperationsByMonth(monthValue);

  const showModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  }

  const moveMonthForward = () => {
    setMonthValue(monthValue.add(1, 'month'));
  }
  const moveMonthBackward = () => {
    setMonthValue(monthValue.subtract(1, 'month'));
  }

  const onCellClickHandler = (date: Dayjs) => {
    console.log("clicked")
    setSelectedDate(date);
    showModal();
  }

  // Render events for a given day using the pre-grouped data
  const cellRender = (date: Dayjs) => {
    if (groupedAnnotationsIsLoading) {
      return <Skeleton active paragraph={{ rows: 2 }} title={false} />;
    }


    const dateKey = date.format('YYYY-MM-DD');
    const items = groupedAnnotations?.[dateKey] || []; // Access grouped data directly

    return (
      <div
        onClick={() => onCellClickHandler(date)}
      >
        {items.length > 0 ? (
          <Events itens={items} />
        ) : (
          <span style={{ color: '#bfbfbf' }}>+ Add Annotation</span>
        )}
      </div>
    );
  };


  return (
    <>
      <Calendar
        onPanelChange={(date) => setMonthValue(date)}
        value={monthValue}
        mode='month'
        headerRender={
          () =>
            <CalendarHeader
              currentMonth={monthValue}
              moveMonthForward={moveMonthForward}
              moveMonthBackward={moveMonthBackward}
            />
        }
        cellRender={cellRender} />
      <AnnotationsModal selectedDate={selectedDate} open={open} closeModal={closeModal} annotationsFromDate={groupedAnnotations?.[selectedDate.format('YYYY-MM-DD')]}/>
    </>
  )
}

