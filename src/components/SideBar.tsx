import { DocumentIcon } from "../icons/DocumentIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"


export const SideBar = () => {
    return <div className="w-full h-screen  ">
        <div className="flex text-lg py-4 ">
            <div className="font-semibold px-8">

                <TwitterIcon size="lg" />
            </div>
            <div className="text-[24px] font-serif">
                Twitter
            </div>
        </div>
        <div className="flex text-lg py-4 ">
            <div className="font-semibold px-8">

                <YoutubeIcon size="lg" />
            </div>
            <div className="text-[24px] font-serif">
                YouTube
            </div>
        </div>
        <div className="flex text-lg py-4 ">
            <div className="font-semibold pl-8 pr-4">

                <ShareIcon size="lg" />
            </div>
            <div className="text-[24px] font-serif">
                Share
            </div>
        </div>
        <div className="flex text-lg py-4 ">
            <div className="font-semibold px-8">

                <DocumentIcon size="lg" />
            </div>
            <div className="text-[24px] font-serif">
                Documents
            </div>
        </div>


    </div>
}