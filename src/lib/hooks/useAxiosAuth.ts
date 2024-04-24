"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { axiosAuth } from "../axios";
import { error } from "console";
import { useRefreshToken } from "./useRefreshToken";


const useAxiosAuth = () => {
    const { data: session } = useSession();
    const refreshtoken = useRefreshToken();

    useEffect(() =>{
        const requestIntercept = axiosAuth.interceptors.request.use((config) => {
            if(!config.headers["Authorization"]){
                config.headers["Authorization"] = `Bearer ${session?.user.access_cookie}`;
            }

            return config;
        },

        (error) => Promise.reject(error)

        );

        const responseIntercept = axiosAuth.interceptors.response.use(
            (response) => response,

            async (error) => {
                const preRequest = error.config;
                if( error.response.status === 401 && !preRequest.sent) {
                    preRequest.sent = true;
                    await refreshtoken();

                    preRequest.headers["Authorization"] = `Bearer ${session?.user.access_cookie}`;
                    return axiosAuth(preRequest);
                }

                return Promise.reject(error);

            }
            
        );

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        };
    }, [session] );

    return axiosAuth;
};

export default useAxiosAuth;