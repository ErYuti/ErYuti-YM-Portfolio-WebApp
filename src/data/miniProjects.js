
import Burger from "../assets/images/BurgerHut.PNG";
import Todo from "../assets/images/Todolist.PNG";
import GuessNum from "../assets/images/GuessNum.PNG";
import Web from "../assets/images/Bootstrap.PNG";
import Shoe from "../assets/images/Shoes.PNG";
import WebDes from "../assets/images/WebDes.PNG";
import Memes from "../assets/images/Memes.PNG";
import Counter from "../assets/images/Counter.PNG";
import QR from "../assets/images/QRCode.PNG";

const miniProjects = [
    {
      title: "YM BurgerHut WebAPP - HTML, CSS",
      description:
        "A sleek and responsive fast food website built using HTML and CSS. It showcases a burger menu, order section, and user-friendly layout. The project focuses on clean UI, modern design, responsiveness, and smooth user interaction for a real-world fast-food brand.",
      img: Burger,
      live: "https://ym-burgerhut-app.netlify.app/",
    },
    {
      title: "YM TodoList WebAPP - HTML, CSS, JS",
      description:
        "A dynamic task management web app built using HTML, CSS, and JavaScript. Users can add, delete, and mark tasks as complete. The app uses local storage to save tasks, features a clean UI,  supports task mark (General, IMP, Work) and Improves daily activities efficiently.",
      img: Todo ,
      live: "https://ym-todolist-webapp.netlify.app/",
    },
    {
      title: "YM GuessNumberGame - HTML, CSS, JS",
      description:
        "A fun interactive number-guessing game built using HTML, CSS, and JavaScript. The player guesses a number between 1 and 100, with instant feedback on too high/low. The game tracks attempts, resets easily, and uses DOM manipulation and random number logic.",
      img: GuessNum ,
      live: "https://ym-guess-num-webgame.netlify.app/",
    },
    {
      title: "YM Code WebApp - Bootstrap",
      description:
        "YM Code is a developer-focused website built using Bootstrap. It showcases modern UI sections like features, about, and contact. The responsive layout adapts to all screen sizes, demonstrating clean design using Bootstrap’s grid and utility classes.",
      img: Web ,
      live: "https://ym-bootstrap-demo.netlify.app/",
    },
    {
      title: "YM Shoes WebAPP - TailwindCSS",
      description:
        "YM Shoe is a modern, fully responsive shoe brand website built using Tailwind CSS. It features a sleek UI, product showcase, and mobile-first design. The project focuses on clean layout, fast development using utility-first CSS, and excellent user experience.",
      img: Shoe,
      live: "https://ym-tailwind-demo.netlify.app/",
    },
    {
      title: "YM Web Design Animation - TailwindCSS, JS",
      description:
        "A creative interactive UI design using TailwindCSS and JavaScript. It features 3 rows with 3 circular photos each that move dynamically based on the user's mouse position (X-Y axis). This showcases parallax-style animation and UI responsiveness in web design.",
      img: WebDes,
      live: "https://ym-webapp-proj.netlify.app/",
    },
    {
      title: "YM Random Meme Generator - HTML, CSS, JS",
      description:
        "YM Meme Generator is a fun web app built using HTML, CSS, and JavaScript that fetches and displays random memes from a public API. It uses Fetch API to retrieve memes dynamically, updating the UI each time a user clicks the Generate Meme button.",
      img: Memes,
      live: "https://ym-random-meme-generate-webapp.netlify.app/",
    },
    {
      title: "YM Counter WebApp - HTML, CSS, JS",
      description:
        "YM Counter is a simple interactive web app built with HTML, CSS, and JavaScript. It features buttons to increase, decrease, and reset a numeric counter. Designed for beginners, it focuses on DOM manipulation, event handling, and user interaction basics.",
      img: Counter,
      live: "https://ym-counder-card-web.netlify.app/",
    },
    {
      title: "YM QR Generator WebApp - HTML, CSS, JS",
      description:
        "YM QR Generator is a responsive web app created using HTML, CSS, and JavaScript. It allows users to input text or a URL and instantly generates a scannable QR code using a public API. It's built to demonstrate API integration, and DOM updates.",
      img: QR,
      live: "https://ym-qrcode-generator-web.netlify.app/",
    },
  ];

export default miniProjects;