// ═══════════════════════════════════════════
//  data.js — All static content / data arrays
// ═══════════════════════════════════════════

const PROJECTS = [
    // ── Web Development
    {
        cat: 'Web Development',
        link: null,
        tab: 'web',
        title: 'Paramount Key Operational Procedures',
        images: ['images/proj2.jpg'],
        desc: `The E-Learning System is a web-based platform developed to deliver department-specific training materials to employees within an organization. Each employee can view only the content intended for their assigned department, ensuring relevance and clarity in learning delivery.

I worked as a full-stack developer, building the backend using ASP.NET MVC with C# and implementing the frontend using HTML5, CSS3, and JavaScript. Data management was handled with Microsoft SQL Server, and the team followed agile practices using Jira for task tracking and sprint planning.`,
        tags: ['C#', 'ASP.NET MVC', 'JavaScript', 'HTML5', 'CSS3', 'SQL SSMS', 'Jira', 'Figma']
    },
    {
        cat: 'Front-End',
        link: 'https://dev.mem.me/',
        tab: 'web',
        title: 'Mem.me',
        images: ['images/proj1.jpg', 'images/proj1.1.jpg', 'images/proj1.2.jpg', 'images/proj1.3.jpg'],
        desc: `Designed a web platform that is designed to make memorization effortless — helping users learn lyrics, vocabulary, scientific terms, and more anytime, anywhere through a simple and accessible experience.`,
        tags: ['Vue.js', 'HTML5', 'CSS3', 'Figma']
    },
    {
        cat: 'Front-End',
        link: 'https://usframe.com',
        tab: 'web',
        title: 'UsFrame',
        images: ['images/proj3.jpg', 'images/proj3.1.jpg', 'images/proj3.2.jpg'],
        desc: `Designed a browser-based video calling application with link-based room access, real-time peer communication, and shared media controls that allow participants to manage camera and microphone states collaboratively.`,
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },

    // ── UI/UX Design
    //{
    //    cat: 'UI/UX Design',
    //    tab: 'uiux',
    //    title: '🎨 UI/UX Projects Coming Soon',
    //    images: [],
    //    desc: "I'm currently preparing my UI/UX case studies. Check back soon for wireframes, prototypes, and design system work!",
    //    tags: ['Figma', 'Adobe XD', 'Framer', 'Prototyping']
    //},

    // ── Graphic Design projects (full page gallery)
    //{
    //    cat: 'Graphic Design',
    //    tab: 'graphic',
    //    title: 'Brand Identity – Sample Client',
    //    coverImage: '',
    //    images: [''],
    //    desc: 'Logo, color palette, and brand guidelines for a startup.',
    //    tags: ['Adobe Illustrator', 'Figma'],
    //},

    // ── Video Editing projects (full page gallery)
    //{
    //    cat: 'Video Editing',
    //    tab: 'video',
    //    title: 'Travel Reel',
    //    coverImage: 'images/video1-thumb.jpg',
    //    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    //    desc: 'Short travel reel edited for Instagram.',
    //    tags: ['CapCut', 'Adobe Premiere Pro'],
    //},
];

// ─────────────────────────────────────────────
const CERTS = [{
        name: 'API Management and Development Training (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert10.png',
        pdf: 'files/cert10.pdf'
    },
    {
        name: 'Django Application for Development with SQL and Databases (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert9.png',
        pdf: 'files/cert9.pdf'
    },
    {
        name: 'Developing AI Applications with Python and Flask (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert8.png',
        pdf: 'files/cert8.pdf'
    },
    {
        name: 'IPython for Data Science, AI & Development (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert7.png',
        pdf: 'files/cert7.pdf'
    },
    {
        name: 'Developing Front-End Apps with React (2025)',
        issuer: 'Cognitive Class – IBM Developer Skills Network',
        img: 'images/cert6.png',
        pdf: 'files/cert6.pdf'
    },
    {
        name: 'Getting Started with Git and GitHub (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert5.jpg',
        pdf: 'files/cert5.pdf'
    },
    {
        name: 'Introduction to HTML, CSS, & JavaScript (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert4.jpg',
        pdf: 'files/cert4.pdf'
    },
    {
        name: 'Introduction to Cloud Computing (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert3.jpg',
        pdf: 'files/cert3.pdf'
    },
    {
        name: 'Introduction to Software Engineering (2025)',
        issuer: 'Coursera – IBM Developer Skills Network',
        img: 'images/cert2.jpg',
        pdf: 'files/cert2.pdf'
    },
    {
        name: 'Prompt Engineering for Everyone (2025)',
        issuer: 'Cognitive Class – IBM Developer Skills Network',
        img: 'images/cert1.jpg',
        pdf: 'files/cert1.pdf'
    }
];

// ─────────────────────────────────────────────
const BLOGS = [{
        tag: 'Development',
        date: 'May 2025',
        title: 'From Intern to Freelancer: My First Year in Tech',
        excerpt: "Reflecting on my internship at Paramount, graduating from TUP, and stepping into freelance work — what I learned, what surprised me, and what's next.",
        content: `<p>When I started my internship at Paramount Life and General Insurance Corp. in February 2025, I had no idea how much my perspective on software development would shift in just a few months.</p>
<h3>The Internship</h3>
<p>I was tasked with building a full E-Learning system from scratch — ASP.NET MVC backend, SQL database, Figma designs, and everything in between. It was the first time I'd built something that real people would actually use at work every day.</p>
<p>The biggest lesson? Communication matters as much as code. Understanding what stakeholders need, translating that into a technical plan, and iterating based on feedback — that's the real work.</p>
<h3>Graduation & Freelancing</h3>
<p>After graduating in 2025, I decided to take the freelance path. It's been challenging and exhilarating. No two projects are the same, and every client teaches you something new about both design and human nature.</p>
<p>If you're a new grad considering freelance — do it. Build your portfolio, say yes to projects that scare you a little, and trust that the skills you have are more valuable than you think. ♡</p>`
    },
    {
        tag: 'Design',
        date: 'April 2025',
        title: 'Why I Fell in Love With Front-End Development',
        excerpt: "CSS animations, hover states, micro-interactions — the moment I realized front-end isn't just \"making things pretty,\" it's crafting emotion through interaction.",
        content: `<p>There's a moment every front-end developer remembers — the first time you wrote a CSS transition and watched something glide smoothly across the screen. For me, that was it. I was hooked.</p>
<h3>More Than Aesthetics</h3>
<p>Front-end development gets dismissed sometimes as "just styling." But what I've come to understand is that front-end is really about <em>empathy</em>. Every margin, every animation delay, every hover state is a decision about how a human being will feel while using what you built.</p>
<h3>The Details Matter</h3>
<p>I've spent hours tweaking button border-radius, adjusting line-height, and testing scroll behavior. And I'd do it again. Because when someone uses a website and thinks "this just feels right" — that feeling came from somewhere. It came from a developer who cared about the details. ♡</p>`
    },
    {
        tag: 'Life',
        date: 'March 2025',
        title: 'Learning Korean While Learning to Code: Parallel Journeys',
        excerpt: "Both coding and language learning require the same core skill: comfort with not knowing yet. Here's what Duolingo taught me about debugging.",
        content: `<p>I've been studying Korean for about two years now, alongside my computer science degree. At first, these felt like completely separate pursuits. Then I started noticing the parallels.</p>
<h3>Syntax Is Syntax</h3>
<p>Korean grammar has particles that mark subject, object, topic — strict rules with exceptions everywhere. Sound familiar? Every programming language has its own syntax quirks. The skill of learning both is the same: pattern recognition and patience.</p>
<h3>Comfort with Confusion</h3>
<p>The hardest part of learning anything new is being okay with not understanding yet. When I don't understand a Korean sentence or a JavaScript error, the answer is the same: slow down, break it apart, look it up, try again.</p>
<p>Language learning made me a more patient debugger. And debugging made me a more persistent language learner. They're more connected than I ever expected. ♡</p>`
    },
    {
        tag: 'Tools',
        date: 'February 2025',
        title: 'My Figma Workflow: From Blank Canvas to Handoff',
        excerpt: 'How I structure my Figma files, use components and variants, and create handoff-ready designs that developers actually love working with.',
        content: `<p>Figma is my favorite tool. There, I said it. And after over a year of using it seriously — for wireframes, high-fidelity mockups, and design systems — I've developed a workflow I'm genuinely proud of.</p>
<h3>Start With Structure</h3>
<p>I always start with a page called "📐 Structure" where I define the design system: colors, typography, spacing tokens, and base components. This takes time upfront but saves hours later.</p>
<h3>Components First</h3>
<p>Every repeating element — buttons, cards, form inputs — gets turned into a component with variants early on. This makes it easy to make global changes and keeps the design consistent across screens.</p>
<h3>Handoff Notes</h3>
<p>When working with developers (including myself), I add notes directly in Figma: exact spacing values, interaction descriptions, hover states. Good design isn't just visual — it's documented. ♡</p>`
    }
];

// ─────────────────────────────────────────────
const TECH_ROW1 = [{
        name: 'React',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'Vue.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
        name: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'TypeScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        name: 'HTML5',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'CSS3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'Tailwind',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    {
        name: 'Bootstrap',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
        name: 'Sass',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
    },
];

const TECH_ROW2 = [{
        name: 'Figma',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
        name: 'Adobe XD',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg'
    },
    {
        name: 'Canva',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.png'
    },
    {
        name: 'Framer',
        img: 'https://cdn.brandfetch.io/idRjXCqGMq/w/400/h/400/theme/dark/icon.png?k=bfHSJFAPEG'
    },
    {
        name: 'WordPress',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'
    },
    {
        name: 'Shopify',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg'
    },
    {
        name: 'Node.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'Python',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        name: 'Django',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
    },
    {
        name: 'C#',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    {
        name: 'ASP.NET',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
    },
];

const TECH_ROW3 = [{
        name: 'MySQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        name: 'Git',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'GitHub',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
        name: 'Vercel',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
    },
    {
        name: 'Netlify',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'
    },
    {
        name: 'Google Cloud',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
    },
    {
        name: 'VS Code',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
        name: 'Jira',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
    },
];