import React from 'react';
import supabase from '../../../supabaseClient';
import { Button, Typography, ConfigProvider, FloatButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GoogleOutlined, GithubOutlined, LeftOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;



type Provider = 'google' | 'github';


export default function Authentication(): React.ReactElement {
    const navigate = useNavigate();
    const loginWithOAuth = async (provider: Provider) => {

        try {

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider,
            });
            if (error) throw error;
            console.log(data);

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    const authSectionStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: "linear-gradient(to right top, #00b96b, #00c686, #02d3a1, #21dfbb, #3cebd3, #37e5d7, #38deda, #3ed7db, #28bcc9, #16a2b5, #06899f, #007089)"
    }

    const authArticleStyle: React.CSSProperties = {
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        backgroundColor: '#fafafa',
        display: 'flex',
        gap: '0.5rem',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const TitleStyle: React.CSSProperties = {
        margin: '0px'
    }
    const TextStyle: React.CSSProperties = {
        marginBottom: '1rem'
    }



    return (
        <section style={authSectionStyle}>
            <FloatButton 
            style={{left:'.5rem'}}
             icon={<LeftOutlined />}
              onClick={() => {navigate('/')} } 
            />
            <article style={authArticleStyle}>
                
                <Title style={TitleStyle}>Authentication</Title>
                <Text style={TextStyle}>
                    You need to be authenticated to use this application.
                </Text>
        
                    <Button onClick={() => loginWithOAuth('google')} icon={<GoogleOutlined />} type="primary" size="large">
                        Sign-in With Google
                    </Button>

                <ConfigProvider theme={{ token: { colorPrimary: '#6a737d', }, }}>
                    <Button onClick={() => loginWithOAuth('github')} icon={<GithubOutlined />} type="primary" size="large">
                        Sign-in With Github
                    </Button>
                </ConfigProvider>
            </article>
        </section>
    )
}