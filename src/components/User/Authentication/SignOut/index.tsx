import React, { useEffect } from 'react';
import supabase from '../../../../supabaseClient';
import { useNavigate } from 'react-router';
export default function SignOut(): React.ReactElement {
    const navigate = useNavigate()
    useEffect(() => {
        supabase.auth.signOut();
        navigate('/')
    }, []);

    return <></>
}