export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
//    title: string;
//    subtitle?: string;
//    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    //title: 'Dante',
    //subtitle: 'Minimal Astro.js theme',
    //description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
        
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://deleteinstagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://deletetwitter.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "Hello, I'm Apsan Bishwokarma, a dedicated and detail-oriented software engineer with a background in both military service and formal education. I am currently advancing my expertise through the VetsWhoCode Coding Bootcamp, where I am actively engaged in learning software engineering.  <br/> <br/>I am proficient in a variety of programming languages, including Java, Python, C++, and JavaScript. Additionally, I am well-versed in developer tools such as the VIM Editor, Git/GitHub, Tmux, and more. My technical skill set extends to Agile Methodology, Project Management Principles, and a range of other technologies.", 

        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
