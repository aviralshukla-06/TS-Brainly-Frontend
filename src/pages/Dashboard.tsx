import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CreateContent } from '../components/CreateContents';
import { SideBar } from '../components/SideBar';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { BACKEND_URL } from '../config';
// import { EditContent } from '../components/EditContent';

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(true);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        async function refresh() {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                });

                const data = response.data.response;

                // Ensure it's always an array
                setContents(Array.isArray(data) ? data : [data]);
            } catch (err) {
                console.error("Failed to fetch content", err);
            }
        }

        refresh();
        const interval = setInterval(refresh, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <CreateContent open={modalOpen} onClose={() => setModalOpen(false)} />
            {/* <EditContent open={modalOpen} onClose={() => setModalOpen(false)} /> */}

            <div className="flex justify-between items-center p-4 col-span-2">
                <span className="font-extrabold text-[30px] px-2 py-1">My Brain</span>

                <div className="flex gap-2">
                    <Button size="md" variant="secondary" text="Share Brain" startIcon={<ShareIcon size="sm" />} />
                    <Button size="md" variant="primary" text="Add Content" startIcon={<PlusIcon size="sm" />} onClick={() => setModalOpen(true)} />
                </div>
            </div>

            <div className='flex'>
                <div className='w-[20%]'>
                    <SideBar />
                </div>

                <div className='flex flex-wrap gap-6 mx-auto justify-evenly w-[78%] ml-[1%]'>
                    {contents.map(({ id, title, links, description, creationdate }, idx) => (
                        <Card
                            key={idx}
                            id={id}
                            title={title}
                            link={links}
                            description={description}
                            date={creationdate || new Date()}
                            linkPreview={{}}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
