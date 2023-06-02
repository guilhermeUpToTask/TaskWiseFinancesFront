import React from 'react';
import Calendar from './components/Calendar';
import DefaultLayout from './components/layout/Default';
const App: React.FC = () => {

  return (
    <>
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
    </>
  );
};

export default App;