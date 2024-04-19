"use client";

import { SafetyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Input } from "antd";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { headers } from "next/headers";
import { error } from "console";

export default function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        let data = JSON.stringify({
            username,
            password,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="py-12">
            <div className ="grid grid-cols-3 gap-4">
            <Card className="col-start-2 mt-20 bg-white shadow-xl h-96">
                <h1 className=" text-center text-xl font-bold text-blue-500">Sign in</h1>
                <h2 className=" text-center font-semibold mt-1">Welcome back!</h2>

                <div className="mt-4">
                    <Input 
                        className="focus:placeholder-transparent mt-4" 
                        value={username} 
                        onChange={(val) => setUsername(val.target.value)} 
                        size="large" placeholder="Username" 
                        type="username" 
                        prefix={<UserOutlined />} 
                    />
                    <Input.Password 
                        className="focus:placeholder-transparent mt-9" 
                        value={password} 
                        onChange={(val) => setPassword(val.target.value)} 
                        size="large" placeholder="Password" type="password" 
                        prefix={<SafetyOutlined />}
                    />
                </div>

                <div className="flex justify-center items-center mt-9">
                    <Button onClick={handleLogin} type="primary" style={{width: "100%"}} >Log in</Button>
                </div>
            </Card>  
            </div>
        </div>
    )
}

