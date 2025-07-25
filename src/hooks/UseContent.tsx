// import { useEffect, useState } from "react";
// import { BACKEND_URL } from "../config";
// import axios from "axios";

// export function useContent() {
//     const [contents, setContents] = useState([]);

//     async function refresh() {
//         try {
//             const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
//                 headers: {
//                     "Authorization": localStorage.getItem("token")
//                 }
//             });
//             setContents(response.data.response);
//         } catch (err) {
//             console.error("Failed to fetch content", err);
//         }
//     }

//     useEffect(() => {
//         refresh();

//         const intervalTime = setInterval(() => {
//             refresh();
//         }, 10 * 1000);

//         return () => clearInterval(intervalTime);
//     }, []);
//     console.log(contents);
//     return contents;
// }

// export default useContent;


import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

type Content = {
    id: number;
    title: string;
    link: string;
    description: string;
};

type ContentResponse = {
    response: Content[];
};

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);

    async function refresh() {
        try {
            const response = await axios.get<ContentResponse>(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "Authorization": localStorage.getItem("token") || ""
                }
            });
            setContents(response.data.response);
        } catch (err) {
            console.error("Failed to fetch content", err);
        }
    }

    useEffect(() => {
        refresh();
        const intervalTime = setInterval(refresh, 10 * 1000);
        return () => clearInterval(intervalTime);
    }, []);

    return contents;
}

export default useContent;
