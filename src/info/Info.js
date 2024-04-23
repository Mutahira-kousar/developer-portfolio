import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
    firstName: "Mutahira",
    lastName: "Mutahira",
    initials: "M.k", // the example uses first and last, but feel free to use three or more if you like.
    position: "shopify theme developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Pakistan'
        },
        {
            emoji: "💻",
            text: "Open to Work"
        },
        {
            emoji: "📧",
            text: "mutahirakausar@gmail.com"
        }
    ],
    socials: [
        {
            link: "",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Mutahira-kousar",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mutahira. I've done B.S Software Engineering from Virtual University of Pakistan(VU). I am a self learner. You can hire me!",
    skills:
        {
            proficientWith: ['Html','CSS','bootstrap','javascript (ES6)','liquid' ,"bootStrap",'firebase-authentication', "MYSQL",'git', 'github', 'figma'],
            exposedTo: ['python','php','figma']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Writing blog posts',
            emoji: '📖'
        },
        {
            label: 'Travelling',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "1. notesApp (localStorage)",
            live: "https://localstorage-notes-app-sohail151127.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/sohail151127/notes-app", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "2. notesApp (API)",
            live: "https://api-notes-app.netlify.app/",
            source: "https://github.com/sohail151127/api-notes-app",
            image: mock2
        },
        {
            title: "3. addToCart (Redux-ToolKit)",
            live: "https://redux-add-to-cart-app.netlify.app/",
            source: "https://github.com/sohail151127/redux-addToCart",
            image: mock3
        },
        {
            title: "4. adminLte (API)",
            live: "https://admin-lte-food-api.netlify.app/",
            source: "https://github.com/sohail151127/adminLte-foodApi",
            image: mock4
        },
        {
            title: "5. movieApp (Firebase-Auth)",
            live: "https://movieapp123.firebaseapp.com/",
            source: "https://github.com/sohail151127/movie-app",
            image: mock5
        }
    ]
}