import React from 'react';
import type { MenuProps } from 'antd';
import {CalendarOutlined, ProfileOutlined, BarChartOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { Menu } from 'antd';

export default function  SiderMenu() : React.ReactElement{

    const items: MenuProps['items'] = [
      {
        key: 'calendar',
        icon: <CalendarOutlined />,
        label: <NavLink to={'/dashboard/calendar'}>Calendar</NavLink>,
      },
      {
        key: 'Annotations',
        icon:<ProfileOutlined />,
        label: <NavLink to={'/dashboard/annotations'}>Annotations</NavLink>,
      },
      {
        key: 'Relatory',
        icon: <BarChartOutlined />,
        label: <NavLink to={'/dashboard/relatory'}>Relatory</NavLink>,
      }
    ]

    return (
        <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={items}
      />
    )
}