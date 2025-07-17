import { CrossIcon } from "../icons/CrossIcon";
import { useRef, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function EditContent({ open, onClose, initialData }) {
    const { contentid, title = "", links = "", description = "" } = initialData || {};

    const titleRef = useRef<HTMLInputElement>(null);
    const linksRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    // Prefill input fields when modal opens
    useEffect(() => {
        if (titleRef.current) titleRef.current.value = title;
        if (linksRef.current) linksRef.current.value = links;
        if (descriptionRef.current) descriptionRef.current.value = description;
    }, [title, links, description]);

    async function editContent() {
        const updatedTitle = titleRef.current?.value;
        const updatedLinks = linksRef.current?.value;
        const updatedDescription = descriptionRef.current?.value;

        await axios.put(`${BACKEND_URL}/api/v1/content`, {
            contentId: contentid,
            title: updatedTitle,
            links: updatedLinks,
            description: updatedDescription
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        onClose();
    }

    return open ? (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-90 flex justify-center">
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
                        <button onClick={editContent} className="flex items-center justify-center w-[80%] px-4 py-2 text-white bg-blue-500 rounded">
                            Submit
                        </button>
                    </div>
                </span>
            </div>
        </div>
    ) : null;
}

interface inputProp {
    placeholder: string;
    ref?: any;
    onChange?: () => void;
}

function Input({ onChange, placeholder, ref }: inputProp) {
    return (
        <div>
            <input
                ref={ref}
                placeholder={placeholder}
                type="text"
                className="px-4 py-2 font-medium text-black border-2 border-black rounded-md"
                onChange={onChange}
            />
        </div>
    );
}
