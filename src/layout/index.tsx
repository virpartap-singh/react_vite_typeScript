import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from '../components/NavBar/SideBar';
import Topbar from '../components/NavBar/TopBar';
import './layout.scss';

const Layout:React.FC = () => {
  return (
    <Grid className='main-wraper'>
      <Grid className='sidebar-wraper'>
        <Sidebar />
      </Grid>
      <Grid className='content-wraper'>
        <Topbar />
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Layout;