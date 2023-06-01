import React from 'react';
import { Calendar, Select, Typography  } from 'antd';
import { CellRenderInfo } from 'rc-picker/lib/interface';
import { Dayjs } from 'dayjs';
        //needs to have utc handler - we send to the back in utc format, and we recive from them in utc format
        //date.utc().format('YYYY-MM-DD')
        //when going to display or use, we need to convert it to local format
        //date.local().format('YYYY-MM-DD')

const {Title} = Typography;

export default function (): React.ReactElement {


    const onSelect = (date:Dayjs) => {
        
        console.log(date.format('YYYY-MM-DD'));
      };


    const onPanelChange = (date:Dayjs, mode:string) => {
        //here we need to fetch all the anotations for that month
        console.log(date, mode);
      }


      const onClickHandler = (date:any) => {
        console.log(date,'info on click');
      }

      const cellRender = (date:Dayjs,info: CellRenderInfo<Dayjs>) => {
        //here we will show the anotations for that day
        return (
          <div onClick={() => onClickHandler(date)}>
            <p>Custom Content</p>
          </div>
        );
      };

      const headerRender = (config:any):React.ReactNode =>{
        console.log(config,'config');
        //here we render the header and control the the month display
            const monthOptions = [
              { label: 'January', value: 1 },
              { label: 'February', value: 2 },
              { label: 'March', value: 3 },
              // ... add more month options as needed
            ];
        
            const handleMonthChange = (value:any) => {
              // Handle the selected month change
              console.log(value);
            };
        
            return (
              <div>
                <Title level={3}>Date - {config.value.format('YYYY-MM-DD')}</Title>

                <Select
                  defaultValue={ 1}
                  style={{ maxWidth: '100px' }}
                  onChange={handleMonthChange}
                >
                  {monthOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            );


          };

    return (
        <>
           <Calendar mode='month' onSelect={onSelect} onPanelChange={onPanelChange}
            cellRender={cellRender} headerRender={(config) => headerRender(config)}/>
        </>
    )
}

