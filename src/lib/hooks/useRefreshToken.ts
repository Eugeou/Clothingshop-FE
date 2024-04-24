"use client";

import axios from "../axios";
import { useSession } from "next-auth/react";

export const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res = await axios.post("/auth/refreshtoken", {
            refresh: session?.user.refresh_cookie,
        });

        if(session) session.user.access_cookie = res.data.access_cookie.value;
    };

    return refreshToken;
}