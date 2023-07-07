import React from 'react';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

export default function  SiderMenu() : React.ReactElement{

  const iconMap: { [key: string]: React.ElementType } = {
    User: UserOutlined,
    LapTop: LaptopOutlined,
    Notification: NotificationOutlined,
  };

    const items: MenuProps['items'] = ['User', 'LapTop', 'Notification'].map(
        (item, index) => {
          return {
            key: index+1,
            icon: React.createElement(iconMap[item]),
            label: item,
          };
        },
      );

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