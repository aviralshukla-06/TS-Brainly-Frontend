import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const nav = useNavigate();

    async function signup() {
        const userName = usernameRef.current?.value
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        console.log(userName);
        console.log(email);
        console.log(password);
        await axios.post(BACKEND_URL + "/api/v1/signup", {

            userName,
            email,
            password

        })

        nav("/signin")
        alert("SignedUp")


    }
    return (
        <div>
            <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-90 flex justify-center">

                <div className="flex flex-col justify-center">

                    <span className="bg-[#A0C878] rounded p-4 h-80 w-80">
                        {/* <div className="flex justify-end cursor-pointer" >
                            <CrossIcon size="md" />
                        </div> */}

                        <div className="flex flex-col items-center justify-start gap-3 py-8">
                            <Input ref={usernameRef} placeholder="username" className="w-64" />
                            <Input ref={emailRef} placeholder="email" className="w-64" />
                            <Input ref={passwordRef} placeholder="password" className="w-64" />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button className="flex items-center justify-center w-[80%] px-4 py-2 text-white bg-blue-500 rounded" onClick={signup}>
                                Signup
                            </button>
                        </div>

                    </span>


                </div>
            </div>
        </div>
    )

}

interface inputProp {
    placeholder: string,
    ref?: any,
    className?: string
}

function Input({ placeholder, ref, className }: inputProp) {
    return <div>
        <input ref={ref} placeholder={placeholder} type={"text"} className={` ${className} px-4 py-2 font-medium text-black border-2 border-black rounded-md flex justify-center items-center`}></input>
    </div>
}