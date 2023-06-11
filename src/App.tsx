import React from 'react';
import Calendar from './components/Calendar';
import DefaultLayout from './components/layout/Default';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>

          <DefaultLayout>
            <Calendar />
          </DefaultLayout>
          
        </QueryClientProvider>
      </ConfigProvider>
    </>
  );
};

export default App;