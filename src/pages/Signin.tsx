import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const nav = useNavigate()

    async function signin() {
        const userName = usernameRef.current?.value
        const password = passwordRef.current?.value

        const response: any = await axios.post(BACKEND_URL + "/api/v1/signin", {

            userName,
            password

        })

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        nav("/dashboard")
        alert("SignedIn")




    }

    return (
        <div>
            <div className="w-screen h-screen bg-[#131927] fixed top-0 left-0 opacity-90 flex justify-center">

                <div className="flex flex-col justify-center">

                    <span className="bg-[#3e3d4b] rounded p-4 h-80 w-80">
                        {/* <div className="flex justify-end cursor-pointer" >
                            <CrossIcon size="md" />
                        </div> */}

                        <div className="flex flex-col items-center justify-start gap-3 py-8">
                            <Input ref={usernameRef} placeholder="username" className="w-64" />
                            <Input ref={passwordRef} placeholder="password" className="w-64" />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button onClick={signin} className="flex items-center justify-center w-[80%] px-4 py-2 text-white bg-blue-500 rounded">
                                Signin
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
    ref?: any
}

function Input({ placeholder, ref }: inputProp) {
    return <div>
        <input ref={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 font-medium text-black border-2 border-black rounded-md flex justify-center items-center"></input>
    </div>
}