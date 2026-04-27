import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginWith = () => {
     const handelGoggleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        })  
    }
    const handelGithubSignIn = async () => {
        const data = await authClient.signIn.social({
        provider: "github"
    })
    }
    return (
       <div className='space-y-4'>
                    <div onClick={handelGoggleSignin} className='flex gap-2 items-center btn btn-outline text-green-600 '>
                        <FcGoogle size={25} />
                        <p>Login with Google</p>
                    </div>
                    <div onClick={handelGithubSignIn} className='flex gap-2 items-center btn btn-outline '>
                        <FaGithub size={25} />
                        <p>Login with Github</p>
                    </div>
                    <div className='flex gap-2 items-center btn btn-outline text-blue-500'>
                        <FaFacebook size={25} />
                        <p>Login with Facebook</p>
                    </div>
                </div>
    );
};

export default LoginWith;