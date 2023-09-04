import blog from "../assets/portofolio/animalsBlog.png";
import Movies_App from "../assets/portofolio/moviePHP.png";
import Recipe_App from "../assets/portofolio/recipeApp.png";
import Book_App from "../assets/portofolio/bookReact.png";
import Shopping_Cart from "../assets/portofolio/cart.png";
import Quizz from "../assets/portofolio/quiz.png";
import Quotes from "../assets/portofolio/quotes.png";
import to_do from "../assets/portofolio/to_do.png";
import Weather from "../assets/portofolio/weather.png";

import B1 from "../assets/project_img/Books/home.png";
import B2 from "../assets/project_img/Books/mybooksLogin.png";
import B3 from "../assets/project_img/Books/login.png";
import B4 from "../assets/project_img/Books/myBooks.png";
import B5 from "../assets/project_img/Books/editBooks.png";
import B6 from "../assets/project_img/Books/search.png";
import B7 from "../assets/project_img/Books/addBook.png";
import B8 from "../assets/project_img/Books/update.png";

import Cart1 from "../assets/project_img/shopping cart/home_page.png";
import Cart2 from "../assets/project_img/shopping cart/cart.png";
import Cart3 from "../assets/project_img/shopping cart/page-items-in-cart.png";

import Endava1 from "../assets/project_img/Endava/1.png";
import Endava2 from "../assets/project_img/Endava/2.png";
import Endava3 from "../assets/project_img/Endava/3.png";
import Endava4 from "../assets/project_img/Endava/4.png";
import Endava5 from "../assets/project_img/Endava/5.png";

import Digital1 from "../assets/project_img/DigitalNationProject/P1.png";
import Digital2 from "../assets/project_img/DigitalNationProject/P2.png";
import Digital3 from "../assets/project_img/DigitalNationProject/P3.png";
import Digital4 from "../assets/project_img/DigitalNationProject/P4.png";
import Digital5 from "../assets/project_img/DigitalNationProject/P5.png";

import Blog0 from "../assets/project_img/blogAnimals/0.png";
import Blog1 from "../assets/project_img/blogAnimals/1.png";
import Blog2 from "../assets/project_img/blogAnimals/2.png";
import Blog3 from "../assets/project_img/blogAnimals/3.png";
import Blog4 from "../assets/project_img/blogAnimals/4.png";
import Blog5 from "../assets/project_img/blogAnimals/5.png";
import Blog6 from "../assets/project_img/blogAnimals/6.png";

export const ImageDescription = [
  {
    project1: Book_App,
    title: "Book App",
    linkGit: "https://github.com/OvidiuAl3x/books.git",
    LgUsed: "HTML, CSS, JavaScript, React",
    linkMore: [
      "• Created a book app in React that utilized json data",
      <br />,
      "• Added login functionality (token)",
      <br />,
      "• Users after login are allowed to add to favorites they books",
      <br />,
      "• Admin can Add, Delete, Edit Books",
      <br />,
      "• Users can Search books by title or author or filter books by genre",
      <br />,
      "• Users can sort the book ascending and descending by year, review or pages",
    ],
    slide: [
      { img: `${B1}`, title: "Home Page" },
      { img: `${B2}`, title: "Login" },
      { img: `${B3}`, title: "Login Page" },
      { img: `${B4}`, title: "My Books" },
      { img: `${B5}`, title: "Edit Books" },
      { img: `${B6}`, title: "Search" },
      { img: `${B7}`, title: "Add Books" },
      { img: `${B8}`, title: "Update Books" },
    ],
  },
  {
    project1: Shopping_Cart,
    title: "Shopping Cart",
    linkGit: "https://github.com/OvidiuAl3x/shopping-cart",
    LgUsed: "HTML, CSS, Material UI, JavaScript, React",
    linkMore: [
      "• Created a shopping cart in React that utilized json data",
      <br />,
      "• Added 'add to cart' functionality",
      <br />,
      "• Users are allowed in cart to delete products from cart or add more product quantity and see total cost",
      <br />,
      "•  After adding a product to the cart, the customer can see how many products are in the cart",
      <br />,
      "• Utilized Material UI to create an intuitive interface for website users",
    ],
    slide: [
      { img: `${Cart1}`, title: "Home Page" },
      { img: `${Cart2}`, title: "Mini Cart on hover" },
      { img: `${Cart3}`, title: "Cart Page" },
    ],
  },
  {
    project1: Recipe_App,
    title: "Recipe App",
    LgUsed: "HTML, CSS, Material UI, JavaScript, React",
    linkMore: [
      "• Successfully built CRUD website while learning React and utilizing an external API",
      <br />,
      "• Utilized AXIOS to fetch data from back-end, displaying it in an organized manner on the front-end",
      <br />,
      "• Utilized Material UI to create an intuitive interface for website users",
      <br />,
      "•  Formik was used to create a new recipe form",
      <br />,
      "• Successfully implemented Yup for form validation on [website]",
      <br />,
      "• Utilized React Router to create dynamic routes for a single page application which provided optimal user experience",
    ],
    slide: [
      { img: `${Endava1}`, title: "Home Page" },
      { img: `${Endava2}`, title: "All Recipes" },
      { img: `${Endava3}`, title: "Create Recipe" },
      { img: `${Endava4}`, title: "Recipe" },
      { img: `${Endava5}`, title: "Delete Recipe" },
    ],
  },
  {
    project1: Quotes,
    title: "Random Quotes App",
    linkGit: "https://github.com/OvidiuAl3x/random-quotes-app",
  },
  {
    project1: Movies_App,
    title: "Movies App",
    LgUsed: "HTML, CSS, BootStrap, JavaScript, PHP",
    linkMore: [
      "• Developed a searchable movie database using PHP & JSON, allowing users to find films by genre, actor, or other criteria",
      <br />,
      "•  Created an easy-to-use interface with search bar and short descriptions for each film",
      <br />,
      "• Successfully implemented design and development of the project, resulting in positive user feedback.",
    ],
    slide: [
      { img: `${Digital1}`, title: "Home Page" },
      { img: `${Digital2}`, title: "All Movies" },
      { img: `${Digital3}`, title: "Contact Page" },
      { img: `${Digital4}`, title: "Search Result" },
      { img: `${Digital5}`, title: "Movie Page" },
    ],
  },
  {
    project1: blog,
    title: "Blog About Animals",
    LgUsed: "HTML, SCSS, JavaScript",
    linkMore: [
      "• Developed a blog site about animals.",
      <br />,
      "•  Add Side Navbar",
      <br />,
      "• Add animation on scroll",
    ],
    slide: [
      { img: `${Blog0}`, title: "Home" },
      { img: `${Blog1}`, title: "About" },
      { img: `${Blog2}`, title: "Evolutionary Origins" },
      { img: `${Blog3}`, title: "Breeds" },
      { img: `${Blog4}`, title: "Moderns animals" },
      { img: `${Blog5}`, title: "Living With animals" },
      { img: `${Blog6}`, title: "Side NavBar" },
    ],
    linkGit: "https://github.com/OvidiuAl3x/tips-about-animals.git",
  },
  {
    project1: Quizz,
    title: "Quizz APP",
    linkGit: "https://github.com/OvidiuAl3x/Quizz-App",
  },
  {
    project1: to_do,
    title: "To Do APP",
    linkGit: "https://github.com/OvidiuAl3x/To-Do-App",
  },
  {
    project1: Weather,
    title: "Weather APP",
    linkGit: "https://github.com/OvidiuAl3x/Weather-App",
  },
];
