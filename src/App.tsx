import React from 'react';
import CalendarSystem from './components/CalendarSystem';
import DefaultLayout from './components/Layouts/Default';
import Bills from './components/Bills';
import Relatory from './components/Relatory';
import Authentication from './components/User/Authentication';
import Profile from './components/User/Profile';
import Settings from './components/User/Settings';
import SignOut from './components/User/Authentication/SignOut';
import AuthRoute from './components/AuthRoute';
import LandingPage from './components/LandingPage';
import Layouts from './components/Layouts';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';


const queryClient = new QueryClient();

const App: React.FC = () => {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layouts />} >
      <Route index element={<LandingPage />} />
      <Route path='authentication' element={<Authentication />} />

      <Route element={<AuthRoute />}>
        <Route path='dashboard' element={<DefaultLayout />}>
          <Route index element={<Navigate to='calendar' replace={true} />} />
          <Route path='calendar' element={<CalendarSystem />} />
          <Route path='bills' element={<Bills />} />
          <Route path='relatory' element={<Relatory />} />
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
          <Route path='signout' element={<SignOut />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/' replace={true} />} />
    </Route>

  ));




  return (
    <>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;