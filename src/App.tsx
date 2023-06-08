import React from 'react';
import Calendar from './components/Calendar';
import DefaultLayout from './components/layout/Default';
import { ConfigProvider } from 'antd';
const App: React.FC = () => {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <DefaultLayout>
          <Calendar />
        </DefaultLayout>
      </ConfigProvider>
    </>
  );
};

export default App;