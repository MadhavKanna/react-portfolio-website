// import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Madhav Kanna",
    lastName: "Thenappan",
    initials: "MKT", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🍜',
            text: 'fueled by ramen'
        },
        {
            emoji: '🌎',
            text: 'based in Canada'
        },
        {
            emoji: "🏫",
            text: "Student at University of Toronto"
        },
        {
            emoji: "📧",
            text: "madhavkanna3141@gmail.com"
        }
    ],
    socials: [

        {
            link: "https://www.instagram.com/madhav_kanna6321/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/MadhavKanna",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/madhav-kanna-thenappan-688802214/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am Madhav. I study Computer Science and Statistics at the University of Toronto. I'm an enthusiastic learner  a self-taught full-stack web developer",
    skills:
    {
        proficientWith: ['python', 'javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'adobe illustrator']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'running',
            emoji: '👟'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],

    doings: [
        {
            name: "Web-Developement",
            icon: "🕸️",
            list: [
                "Developing complex web apps in Bootstrap, React JS and Svelte JS",
                "Running server backends using NodeJS and Express",
                "Using APIs to obtain and send information between servers",
                "Programming functionality into websites using JQuery"
            ],
            logos: {
                "Javascript": "fa-js",
                "HTML5": "fa-html5",
                "CSS3": "fa-css3-alt",
                "NodeJS": "fa-node-js",
                "ReactJS": "fa-react",
                "Bootstrap": "fa-bootstrap"
            }

        },
        {
            name: "AI & Machine Learning",
            icon: "🤖",
            list: [
                "AI and Machine Learning stuff"
            ],
            logos: {
                "HTML5": "fa-html5",
                "CSS3": "fa-css3-alt",
                "NodeJS": "fa-node-js",
                "ReactJS": "fa-react",
                "Bootstrap": "fa-bootstrap"
            }
        }

    ],
    education: [
        {
            name: ""
        }

    ],
    projects: [
        {
            name: "Portfolio Website", 
            description: "Personal Portfolio Website meant to show what I'm about, my projects, my experience and contact", 
            tech: "ReactJS, React-router, npm, HTML5, CSS3, JS, NodeJS, Express, Bootstrap, Deployed using Heroku",
            live: "#", 
            source: ""
        },
        {
            name: "Simon Game",
            description: "The classic memory game, testing memory by requiring the player to remember sequence of colors and sounds with a record of high score",
            tech: "HTML5, CSS3, JS, Bootstrap, JQuery, Deployed using Github Pages",
            live: "",
            source: ""
        },
        {
            name: "Weather Website",
            description: "A Weather Website showing weather attributes like temperature, humidity, weather conditions, etc using a backend that makes us of OpenWeather API to obtain real time weather data all over the world",
            tech: "HTML5, CSS3, JS, NodeJS, Express, Bootstrap, JQuery, API, Deployed using Heroku",
            live: "",
            source: ""
        },
        {
            name: "Tindog",
            description: "",
            tech: "HTML5, CSS3, JS, Bootstrap, deployed using Github Pages",
            live: "",
            source: ""
        }

    ]
}