import { createContext, useState, useEffect } from "react";
import supabase from "../../../../supabaseClient";
import { Session } from "@supabase/supabase-js";

type AuthContextData = {
    session: Session | null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({ children }: any) => {
    const [session, setSession] = useState<Session | null>(null);
    const  [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then((res) => {
            const { data, error } = res;
            if (error) { throw error }
            setSession(data.session);
            setLoading(false);
        });


        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                setSession(session);
                console.log(session?.access_token);
                supabase.auth.getUser(session?.access_token).then(res =>
                    console.log(res)
                )
            
            }
            if (event === 'SIGNED_OUT') {
                setSession(null);
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ session, loading }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;