'use client'
import Link from "next/link";
import { forbidden } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handelLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);
    }
    return (
        <div className="min-h-[89vh] flex items-center bg-base-300">
            <form
                onSubmit={handelLogin}
                className="bg-base-100 border-base-300 rounded-box w-150 border py-10 px-15 space-y-3 mx-auto">
                <h2 className="text-3xl font-semibold text-center">Login your account</h2>
                <hr className="text-gray-200" />
                <fieldset className="space-y-4" >
                    <label className="label font-bold ">Email</label>
                    <input type="email" name="email" className="input w-full  border-none bg-base-300" placeholder="Email" />
                </fieldset>
                <fieldset className="space-y-4 relative">
                    <label className="label font-bold">Password</label>
                    <input type={`${showPassword ? "text" : "password"}`} name="password" className="input w-full   border-none bg-base-300" placeholder="Password" />
                    <span className="cursor-pointer absolute top-12 right-3" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}</span>
                </fieldset>
                <button type="submit" className="btn btn-neutral w-full m-0">Login</button>
                <p className="text-center text-gray-500 pt-4">Do not Have An Account ? <span className="text-error cursor-pointer font-bold"><Link href={'/register'}>Register</Link></span></p>
            </form>

        </div>
    );
};

export default LoginPage;