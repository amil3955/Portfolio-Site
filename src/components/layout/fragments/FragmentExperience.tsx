import { ExperienceData, CareerData } from "../../../constants/Experience.ts";
import ExperienceDescription from "../../UI/ExperienceDescription.tsx";
import { twMerge } from "tailwind-merge";

type FragmentExperienceProps = {
    experience: ExperienceData;
    career: CareerData;
    index: number;
};

export default function FragmentExperience({
    experience,
    career,
    index,
}: FragmentExperienceProps) {
    return (
        <div
            id={experience.refName}
            className={twMerge(
                "flex w-full flex-col items-stretch gap-[5%] md:h-[31rem] ",
                index % 2 ? "lg:flex-row-reverse" : "lg:flex-row",
            )}>
            <div className='relative h-auto w-full lg:w-[50%]'>
                <div className='-inset-[2rem] md:inset-0 lg:-inset-[2rem] xl:-inset-[1rem] 2xl:-inset-[0rem]'>
                    <div className="text-3xl font-bold">{
                        career.company}
                    </div>
                    <div className="text-xl font-semibold">
                        {career.title}
                    </div>
                    <div className="text-lg font-semibold">
                        {career.period}
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[45%]'>
                <ExperienceDescription experience={experience} career={career} index={index + 1} />
            </div>
        </div>
    );
}
