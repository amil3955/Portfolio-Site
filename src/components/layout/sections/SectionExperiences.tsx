import { Experiences, Career } from "../../../constants/Experience.ts";
import SectionTitle from "../../UI/SectionTitle.tsx";
import FragmentExperience from "../fragments/FragmentExperience.tsx";

export default function SectionExperiences() {
    return (
        <div className='flex flex-col items-center justify-center pt-16 lg:gap-0 lg:pt-0'>
            <SectionTitle title='Experience' />
            <div className="py-24">
                {Experiences.map((experience, idx) => (
                    <FragmentExperience
                        key={experience.refName}
                        experience={experience}
                        career={Career[idx]}
                        index={idx}
                    />
                ))}
            </div>
        </div>
    );
}