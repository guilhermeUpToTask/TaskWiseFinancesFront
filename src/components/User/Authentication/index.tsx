import React from 'react';
import supabase from '../../../supabaseClient';
import { Button } from 'antd';


export default function Authentication(): React.ReactElement {

    const loginWithGoogle = async () => {

        try {

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if (error) throw error;
            console.log(data);

        } catch (error) {
            console.error(error);
            return error;
        }
    }
    return (
        <>
            <Button onClick={loginWithGoogle} type="primary" size="large">Login With Google</Button>
        </>
    )
}