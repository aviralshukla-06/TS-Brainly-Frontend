
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { EditIcon } from "../icons/EditIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface cardComponents {
    id: number;
    title: string;
    link: string;
    description?: string;
    date: Date;
    open?: any;
    onClose?: any;
    onEdit?: () => void; // <-- Add this
    linkPreview: {
        image?: string;
        title?: string;
        description?: string;
    };
}



export function Card(props: cardComponents) {

    // Remove the unused onEdit declaration completely


    // const contentId = props.id
    // console.log(contentId);
    // console.log(props.title);



    return <>

        <div className="bg-white rounded-md shadow-lg w-56 h-72 mx-4 mt-6 border border-black">
            <div className="flex justify-between h-[15%] shadow-md items-center align-middle ">

                <div className="flex align-middle items-center w-[70%] justify-evenly pr-2 ">
                    <p><DocumentIcon size="md" /></p>
                    <div className="font-serif font-bold text-sm leading-3">{props.title}</div>
                </div>
                <div className="flex w-[30%] justify-evenly ">
                    <div className="flex">
                        <span className="mr-2"><ShareIcon size="sm" /></span>
                        <DeleteIcon size="sm" contentId={props.id} />
                    </div>

                </div>
            </div>

            <div className="h-[46%] flex flex-col items-center justify-start mt-1 px-1">
                {props.linkPreview?.image ? (
                    <img
                        src={props.linkPreview.image}
                        alt="Link preview"
                        className="h-auto w-auto object-cover rounded-sm"
                    />
                ) : (
                    <div className="h-24 w-full bg-gray-200 rounded-sm flex items-center justify-center text-xs text-gray-500">
                        No Preview Available
                    </div>
                )}

            </div>

            <div className="flex justify-between h-[21%] pl-3  items-center font-serif leading-4 align-middle ">
                {props.description}
            </div>
            <div className="font-serif text-[14px] flex justify-around items-center ">
                <p>
                    <span>Created on: </span>
                    {new Date(props.date).toLocaleDateString()}
                </p>
                {/* <div className="flex  w-[20%] justify-end font-bold cursor-pointer "> */}
                {props.onEdit && (
                    <button
                        onClick={props.onEdit}
                        className="flex w-[20%] font-bold cursor-pointer justify-end text-sm items-center mb-3 underline mt-2"
                    >
                        <EditIcon size={"lg"} />
                    </button>
                )}
                {/* </div> */}

                {/* <EditContent open={isEditOpen} onClose={() => setIsEditOpen(false)} /> */}
            </div>

        </div>


    </>
}