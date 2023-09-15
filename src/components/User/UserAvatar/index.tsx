import React,{useContext} from 'react';
import { Avatar, Dropdown, Space, Button } from 'antd';
import { DownOutlined,UserOutlined, SettingOutlined,LogoutOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import type { MenuProps } from 'antd';
import {AuthContext} from '../Authentication/context/AuthProvider';

const items: MenuProps['items'] = [
    {
        label: <NavLink to="/dashboard/profile">Profile</NavLink>,
        key: '0',
        icon:<UserOutlined />
    },
    {
        label: <NavLink to="/dashboard/settings">Settings</NavLink>,
        key: '1',
        icon:<SettingOutlined />
    },
    {
        type: 'divider',
    },
    {
        label: <NavLink to="/dashboard/signout">Sign Out</NavLink>,
        key: '3',
        icon:<LogoutOutlined />

    },
];

export default function UserAvatar(): React.ReactElement {
const context = useContext(AuthContext);
    const userAvatar = context?.session?.user.user_metadata?.avatar_url;

    return (
        <Dropdown menu={{ items }} trigger={['click']} placement="bottom">
            <Space>
                <Button type='link' size='large'>
                    <Avatar shape='circle' size={'large'} src={userAvatar} alt='user-avatar'/>
                    <DownOutlined />
                </Button>
            </Space>
        </Dropdown>
    )
}