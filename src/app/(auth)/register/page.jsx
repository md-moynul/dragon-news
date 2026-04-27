'use client'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-[95vh] flex items-center bg-base-300">
            <form className="bg-base-100 border-base-300 rounded-box w-150  border py-10 px-15 space-y-4 mx-auto shadow-2xl">
                <h2 className="text-3xl font-semibold text-center">Register your account</h2>
                <hr className="text-gray-200" />
                <fieldset className="space-y-4">
                    <label className="label font-bold ">Your Name</label>
                    <input type="text" name="name" className="input w-full  border-none bg-base-300" placeholder="Enter your name" />
                </fieldset>
                <fieldset className="space-y-4">
                    <label className="label font-bold ">Photo URL</label>
                    <input type="text" className="input w-full  border-none bg-base-300" placeholder="Enter your photo url" />
                </fieldset>
                <fieldset className="space-y-4">
                    <label className="label font-bold ">Email</label>
                    <input type="email" className="input w-full  border-none bg-base-300" placeholder="Email" />
                </fieldset>
                <fieldset className="space-y-4 relative">
                    <label className="label font-bold">Password</label>
                    <input type={`${showPassword ? "text" : "password"}`} className="input w-full   border-none bg-base-300" placeholder="Password" />
                    <span className="cursor-pointer absolute top-12 right-3" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}</span>
                </fieldset>
                <fieldset className="space-y-4 " >
                    <label className="label">
                        <input type="checkbox" required className="checkbox" />
                        <span className="text-gray-500">Accept <span className="font-bold">Term & Conditions</span></span>
                    </label>
                </fieldset>
                <button type="submit" className="btn btn-neutral w-full">Resister</button>

            </form>

        </div>
    );
};

export default RegisterPage;