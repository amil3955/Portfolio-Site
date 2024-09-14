import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useState } from "react";

export default function Footer() {
    
    const today = new Date();

    const [date, setDate] = useState(today.getFullYear());

    return (
        <div className='space-y-4 bg-black/50 p-4 py-8 lg:p-8'>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-2 text-center'>
                <div className='shrink-0 break-keep font-bold tracking-wide'>
                    {date} | Created by Amil Sena Rodrigues
                </div>
            </div>
        </div>
    );
}
