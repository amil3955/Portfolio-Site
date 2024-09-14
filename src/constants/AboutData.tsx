import { IconType } from "react-icons";
import { FaHouseFlag, FaUserTie } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

/**
 * Represents a topic in the About sections.
 */
export type AboutTopic = {
    title: string;
    content: JSX.Element[];
    icon: IconType;
};

/**
 * Tailwind style for bold text.
 */
const boldStyle = "font-bold text-white/90";

/**
 * Tailwind style for links.
 */
const aStyle =
    "underline text-white/90 hover:text-white duration-300 decoration-[unset] underline-offset-2 transition hover:decoration-[inherit] font-semibold";

/**
 * Array of About sections topics.
 */
export const ABOUT_TOPICS: AboutTopic[] = [
    {
        title: "Who Am I?",
        content: [
            <>
                Hi There! I'm{" "}
                <span className={boldStyle}>Amil Sena Rodrigues</span>, a
                living in Sao Lourenco, Brazil.
            </>,
            <>
                I am an experienced front-end developer with a strong background in building visually appealing and interactive web applications.
                I have worked with clients across a wide range of industries including <span className={boldStyle}>Real Estate</span>, <span className={boldStyle}>IT</span> ,<span className={boldStyle}>Education</span>, <span className={boldStyle}>Travle</span>, <span className={boldStyle}>SaaS</span>, <span className={boldStyle}>Healthcare</span> and <span className={boldStyle}>Finance</span>, and have experience building <span className={boldStyle}>3D websites</span>, <span className={boldStyle}>web applications</span> and developing immersive and interactive 3D <span className={boldStyle}>games</span> using <span className={boldStyle}>React</span>,<span className={boldStyle}>Next.js</span> and <span className={boldStyle}>Three.js</span>
            </>,
        ],
        icon: FaUserTie,
    },
    {
        title: "Education",
        content: [
            <>
                Throughout my academic journey, I attained both a{" "}
                <span className={boldStyle}>Bachelor</span> degree in{" "}
                <span className={boldStyle}>Computer Science</span> from the{" "}Universidade Federal do Pará UFPA.
            </>,
            <>
                It was during these university years that I delved deeply into
                the study of my passion, equipped with both theoretical and
                practical approaches, fostering a{" "}
                <span className={boldStyle}>problem-solving mindset</span> that
                continues to drive me.
            </>,
        ],
        icon: IoIosSchool,
    },
];
