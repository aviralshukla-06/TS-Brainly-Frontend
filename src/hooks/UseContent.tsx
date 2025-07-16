import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
    const [contents, setContents] = useState([]);

    async function refresh() {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });

            // 🟢 Extract the correct part of the response (adjust if needed)
            // If your backend returns: { response: [array] } then use response.data.response
            setContents(response.data.response);
        } catch (err) {
            console.error("Failed to fetch content", err);
        }
    }

    useEffect(() => {
        refresh();

        const intervalTime = setInterval(() => {
            refresh();
        }, 10 * 1000);

        return () => clearInterval(intervalTime);
    }, []);
    console.log(contents);
    return contents;
}

export default useContent;
