import React from 'react';
import Calendar from './components/Calendar';
import DefaultLayout from './components/layout/Default';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import WarningModal from './components/WarningModal';
const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <>
        <QueryClientProvider client={queryClient}>
          <DefaultLayout>
            <WarningModal/>
            <Calendar />
          </DefaultLayout>
          
        </QueryClientProvider>
    </>
  );
};

export default App;