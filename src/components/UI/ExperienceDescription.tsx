import { ExperienceData, CareerData } from "../../constants/Experience.ts";
// import { CareerData } from "../../constants/Experience.ts";
import { motion } from "framer-motion";
import { twJoin } from "tailwind-merge";

type ExperienceDescriptionProps = {
    experience: ExperienceData,
    career: CareerData,
    index: number
};

const descriptionAnimDelay = 0.25;
const tagAnimDelay = 0.25;

export default function 
ExperienceDescription({
    experience,
    index,
}: ExperienceDescriptionProps) {
    const { description} = experience;
    const isOnTheRight = index % 2 === 0;

    return (
        <div className='h-full justify-center items-center'>
            <motion.div
                className='flex flex-col justify-center gap-4 p-4 text-lg'
                variants={{
                    inView: {
                        transition: {
                            staggerChildren: 0.25,
                            delayChildren: descriptionAnimDelay,
                        },
                    },
                }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView='inView'>
                <motion.div
                    variants={{
                        inView: {
                            scaleY: 1,
                            opacity: 1,
                            transition: {
                                staggerChildren: descriptionAnimDelay,
                                delayChildren: 1,
                                duration: 1.25,
                                ease: [0.08, 0.565, 0.34, 0.875],
                            },
                        },
                    }}
                    style={{ scaleY: 0, opacity: 0 }}
                    className={twJoin(
                        "relative flex origin-top flex-col items-stretch gap-6 pl-4 text-justify before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 lg:text-left",
                        isOnTheRight
                            ? "before:bg-fuchsia-500"
                            : "before:bg-cyan-500",
                    )}>
                    {description.map((paragraph, idx) => (
                        <motion.div
                            key={idx}
                            className='text-white/90 opacity-0'
                            variants={{
                                inView: {
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 1,
                            }}>
                            {paragraph}
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div
                    variants={{
                        inView: {
                            scaleY: 1,
                            opacity: 1,
                            transition: {
                                staggerChildren: descriptionAnimDelay,
                                delayChildren: 1,
                                duration: 1.25,
                                ease: [0.08, 0.565, 0.34, 0.875],
                            },
                        },
                    }}
                    style={{ scaleY: 0, opacity: 0 }}
                    className={twJoin(
                        "relative flex origin-top flex-col items-stretch gap-6 pl-4 text-justify before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 lg:text-left",
                        isOnTheRight
                            ? "before:bg-fuchsia-500"
                            : "before:bg-cyan-500",
                    )}>
                </motion.div>
                <motion.div
                    variants={{
                        inView: {
                            transition: {
                                staggerChildren: tagAnimDelay,
                                delayChildren:
                                    1 +
                                    description.length * descriptionAnimDelay,
                            },
                        },
                    }}
                    className='flex flex-wrap justify-center gap-4 lg:justify-start'>
                </motion.div>
                <motion.div
                    variants={{
                        inView: {
                            transition: {
                                staggerChildren: 0.25,
                                delayChildren:
                                    1 +
                                    description.length * descriptionAnimDelay 
                            },
                        },
                    }}
                    className='mt-8 flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-end'>
                </motion.div>
            </motion.div>
        </div>
    );
}
