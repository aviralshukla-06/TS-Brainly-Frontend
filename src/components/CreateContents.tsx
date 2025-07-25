import { CrossIcon } from "../icons/CrossIcon";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function CreateContent({ open, onClose }) {

    const linksRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    async function addContent() {
        const title = titleRef.current?.value;
        const links = linksRef.current?.value;
        const description = descriptionRef.current?.value;

        console.log(title);
        console.log(links);
        console.log(description);

        await axios.post(BACKEND_URL + "/api/v1/content", {
            links,
            title,
            description
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();

    }

    return (
        <div>
            {open && <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-90 flex justify-center">

                <div className="flex flex-col justify-center">

                    <span className="bg-[#101624] rounded p-4 h-96 w-80">
                        <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CrossIcon size="md" />
                        </div>

                        <div className="flex flex-col items-center justify-start gap-3 py-4">
                            <Input ref={titleRef} placeholder="Title" className="w-64" />
                            <Input ref={linksRef} placeholder="Link" className="w-64" />
                            <Input ref={descriptionRef} placeholder="Description" className="w-64" />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button onClick={addContent} className="flex items-center justify-center w-24 px-4 py-2 text-white bg-blue-500 rounded">
                                Submit
                            </button>
                        </div>

                    </span>


                </div>
            </div>}
        </div>
    )

}

interface inputProp {
    placeholder: string,
    ref?: any
    onChange?: () => void
    className?: string
}

function Input({ onChange, placeholder, ref, className }: inputProp) {
    return <div>
        <input ref={ref} placeholder={placeholder} type={"text"} className={`${className} px-4 py-2 font-medium text-black border-2 border-black rounded-md flex justify-center items-center`} onChange={onChange}></input>
    </div>
}
