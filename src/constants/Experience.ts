/**
 * Represents a tag for a project.
 */
export type ExperienceTag =
    | "motivapp"
    | "slide-run"
    | "mind-blooming"
    | "unimiibo"
    | "code-hunter"
    | "undertale-3d";

export type ExperienceData = {
    refName: ExperienceTag,
    description: string[]
};

/**
 * Complete list of Project data.
 */
export const Experiences: ExperienceData[] = [
    {
        refName: "motivapp",
        description: [
            "Created a notification system by developing API endpoints in NestJS and integrating them into a Next.js UI, increasing user activity and improving retention rates.",
            "Resolved performance issues with large datasets by implementing virtualized lists that only render items in view, improving UI responsiveness and reducing load times.",
            "Improved the release and deployment processes by simplifying approval protocols to require only QA signoff, resulting in a faster release cycle and feature deployment."
        ],
    },
    {
        refName: "slide-run",
        description: [
          "Converted 3D experience from WebGL to Three.js to improve developer efficiency and accessibility",
          "Created and modified 3D models in Blender for use in prototype React applications.",
          "Implemented various UI mockups in React and TypeScript; the mockups were created in Figma by a UI designer working on the team"
        ],
    },
    {
        refName: "mind-blooming",
        description: [
            "Designed MySQL database tables and developed stored procedures to support a medical remote diagnostic system.",
            "Developed PHP web pages with JavaScript to provide query and statistic function.",
            "Developed COM objects as back-end or business logic layer in C++. Those COM objects acted as a small service to combine the whole workflow together.",
            "Created a C++ program based on different medical image formats such as CT and MRI.",
            "Created automatically fax module by integrating it with hardware in C++. Converted a text into a TIFF format file, sent it to hardware, and to the target fax machine."
        ],
    }
];


export type CareerData = {
    company: string,
    title: string,
    period: string
};

export const Career: CareerData[] = [
    {
        company: "Qintess",
        title: "Full stack Developer | Project Manager",
        period: "September 2016-December 2019"
    },
    {
        company: "Dextra",
        title: "3D frontend Developer",
        period: "September 2010-April 2014"
    },
    {
        company: "Stefanini",
        title: "Software develoer",
        period: "March 2000- May 2006"
    }
];


