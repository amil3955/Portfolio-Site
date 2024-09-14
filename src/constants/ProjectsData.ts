/**
 * Represents a tag for a project.
 */
export type ProjectTag =
    | "stich-hub"
    | "shoes-ecommerce"
    | "sketch-book"
    | "unimiibo"
    | "code-hunter"
    | "undertale-3d";

/**
 * Represents the type of call-to-action (CTA).
 */
export type CtaType = "product" | "repository" | "store" | "video";

/**
 * Represents a call-to-action (CTA) item.
 */
export type Cta = {
    type: CtaType;
    text: string;
    href: string;
};

/**
 * Represents the type of device used in a project.
 */
export type DeviceType = "laptop" | "smartphone";

/**
 * Represents data specific to a laptop.
 */
export type LaptopData = {
    type: "laptop";
};

/**
 * Represents data specific to a smartphone.
 */
export type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

/**
 * Represents data about the device used in a project.
 */
export type DeviceData = {
    type: DeviceType;
    texture: string;
    textureCount: number;
} & (LaptopData | SmartphoneData);

/**
 * Represents data about a project.
 */
export type ProjectData = {
    refName: ProjectTag;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

/**
 * Complete list of Project data.
 */
export const PROJECTS: ProjectData[] = [
    {
        refName: "stich-hub",
        title: "StichHub",
        isTeam: true,
        description: [
            "Tailor of Choice: Choose from a list of experienced tailors with whom you want to request your order",
            "3D Configurator: Make changes to your desired design while simultaneously seeing how it looks overall through a 3D model of yourself.",
            "Online Measurements: We provide an online facility that enables users to accurately provide measurements for their clothes.",
            "AR Tech:  With our tech, you come one step closer to that. It enables you to know just how your piece is going to turn out."
        ],
        tags: ["re.svg","node.svg", "three.svg", "tail.svg", "ts.svg", "gsap.svg"],
        cta: [
            {
                text: "Visit the WebSite",
                type: "product",
                href: "https://stichhub.vercel.app/",
            },
            {
                text: "See the Source Code",
                type: "repository",
                href: "https://github.com/amil3955/stichhub-react-built",
            },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_codehunter.png",
        },
    },
    {
        refName: "sketch-book",
        title: "SketchBook",
        isTeam: false,
        description: [
            " Simple web based game engine built on three.js and cannon.js focused on third-person character controls and related gameplay mechanics.",
            "Mostly a playground for exploring how conventional third person gameplay mechanics found in modern games work and recreating them in a general way.",
        ],
        tags: ["re.svg", "three.svg", "gsap.svg", "tail.svg"],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_sketch.png",
        },
        cta: [
            {
                text: "Visit the WebSite",
                type: "product",
                href: "https://jblaha.art/sketchbook/0.4/",
            },
            {
                text: "See the Source Code",
                type: "repository",
                href: "https://github.com/amil3955/Sketchbook-3D",
            },
        ],
    },
    {
        refName: "unimiibo",
        title: "Unimiibo",
        isTeam: false,
        description: [
            "Welcome to Unimiibo, your ultimate destination for discovering Nintendo's expansive collection of character figurines, known as Amiibo. These statuettes represent not only characters from Nintendo's iconic video games but also a variety of other franchises. Each figurine comes equipped with special NFC tags that unlock exclusive in-game bonuses when activated near Nintendo consoles.",
            'Derived from the fusion of "Unimib" - the abbreviation for the University of Milano-Bicocca - and "Amiibo", Unimiibo represents a harmonious blend of academia and gaming culture. Dive into a treasure trove of iconic characters and discover the magic of Amiibo through my user-friendly platform.',
            "Unimiibo goes beyond mere cataloging; it embodies transparency and accessibility. As an open-source project, its codebase is readily available on my GitHub profile. Explore the intersection of innovation and accessibility with me, only at Unimiibo!",
        ],
        tags: ["re.svg", "three.svg", "host.svg", "ts.svg"],
        cta: [
            {
                text: "Visit the WebSite",
                type: "product",
                href: "https://amil3955.github.io/unimiibo/",
            },
            {
                text: "See the Source Code",
                type: "repository",
                href: "https://github.com/amil955/unimiibo",
            },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_unimiibo.jpg",
        },
    },
    {
        refName: "shoes-ecommerce",
        title: "Shoes Ecommerce",
        isTeam: false,
        description: [
            "Built with Next.js, the site offers blazing-fast page loading times, excellent SEO, and a user-friendly interface.",
            "All products, discounts, and images are managed through Strapi CMS, enabling easy updates and content management without technical expertise",
            "Secure payment processing is handled by Stripe, ensuring a safe and efficient checkout experience for customers.",
            "Utilizes Nodemailer to send transactional, such as order confirmations and shipping notifications, keeping customers informed throughout their shopping journey.",
        ],
        tags: ["re.svg", "next.svg", "tail.svg", "stripe.svg", "gql.svg"],
        cta: [
            {
            text: "Visit the WebSite",
            type: "product",
            href: "https://shoes-ecommerce.herokuapp.com/shoes",
            },
            {
                text: "See the Source Code",
                type: "repository",
                href: "https://github.com/amil3955/Ecommerce-shoes",
            },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_shoes.png",
        }
    },
    {
        refName: "undertale-3d",
        title: "Undertale 3D",
        isTeam: false,
        description: [
            "Undertale 3D is a video game prototype aimed at recreating the beloved battles we've come to cherish in Undertale, the game born from the brilliant mind of Toby Fox and hailed as a massive success worldwide.",
            "Departing from the 'pixel-art' style of the original product and leveraging the full potential of Unreal Engine 5, this prototype faithfully recreates one of the most iconic battles: the showdown against Undine The Undying.",
            "Set to the magnificent OST 'Battle against a true hero', confront Undyne in a battle of wits and skill. Will you emerge victorious?",
            "With Undertale 3D, the excitement and intensity of battles come to life in a whole new dimension, offering players an immersive and thrilling experience. Prepare to challenge fate and discover if you have the courage and determination to prevail.",
        ],
        tags: ["re.svg", "three.svg", "host.svg", "ts.svg"],
       
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_undertale3d.jpg",
        },
    },
];
