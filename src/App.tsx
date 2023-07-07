import React from 'react';
import CalendarSystem from './components/CalendarSystem';
import DefaultLayout from './components/layout/Default';
import { QueryClient, QueryClientProvider } from 'react-query';
import NotificationModal from './components/NotificationModal';
const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <>
        <QueryClientProvider client={queryClient}>
          <DefaultLayout>
            <NotificationModal/>   
            <CalendarSystem />
          </DefaultLayout>
          
        </QueryClientProvider>
    </>
  );
};

export default App;