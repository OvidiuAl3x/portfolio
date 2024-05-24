import blog from "../assets/portofolio/animalsBlog.png";
import Movies_App from "../assets/portofolio/moviePHP.png";
import Recipe_App from "../assets/portofolio/recipeApp.png";
import Book_App from "../assets/portofolio/bookReact.png";
import ECommerce from "../assets/portofolio/e-commerce.jpeg";
import Quizz from "../assets/portofolio/quiz.png";
import Quotes from "../assets/portofolio/quotes.png";
import to_do from "../assets/portofolio/to_do.png";
import Weather from "../assets/portofolio/weather.png";
import ui_orase from "../assets/portofolio/ui-orase.jpeg";
import scraper_ui from "../assets/portofolio/scraper-ui.jpeg";

import B1 from "../assets/project_img/Books/home.png";
import B2 from "../assets/project_img/Books/login.png";
import B4 from "../assets/project_img/Books/home_filters.png";
import B5 from "../assets/project_img/Books/myBooks_footer.png";
import B6 from "../assets/project_img/Books/books_table.png";
import B7 from "../assets/project_img/Books/create_book.png";
import B8 from "../assets/project_img/Books/book_details.png";
import B9 from "../assets/project_img/Books/add_review.png";

import Cart1 from "../assets/project_img/e-commerce/home.jpeg";
import Cart2 from "../assets/project_img/e-commerce/home_2.jpeg";
import Cart3 from "../assets/project_img/e-commerce/men_section.jpeg";
import Cart4 from "../assets/project_img/e-commerce/men_clothes.jpeg";
import Cart5 from "../assets/project_img/e-commerce/wishlist.jpeg";
import Cart6 from "../assets/project_img/e-commerce/cart.jpeg";

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

import ui_orase1 from "../assets/project_img/ui-orase/ui-orase.jpeg";
import ui_orase2 from "../assets/project_img/ui-orase/Screenshot_24-5-2024_114336_peviitor-ro.github.io.jpeg";

import scraper_ui1 from "../assets/project_img/scraper-ui/scraper_ui1.jpeg";
import scraper_ui2 from "../assets/project_img/scraper-ui/scraper_ui2.jpeg";

export const projectData = [
  {
    project: ui_orase,
    title: "City Search Application",
    languageUsed:
      " Html, CSS, Vanilla JavaScript, ES6 features (Promises, async/await, template literals, let/const, arrow functions, etc.)",
    descriptionProject: [
      "• Created a search functionality for city data using vanilla JavaScript.",
      <br />,
      "• Fetched and processed data from APIs using async/await and Promises.",
      <br />,
      "• Rendered search results dynamically using template literals and DOM manipulation.",
      <br />,
      "• Validated user input with regular expressions and provided real-time feedback.",
      "• Streamlined Database Testing Process: Developed a user-friendly interface to facilitate database testing procedures, empowering testers to efficiently verify the completeness of the database by providing easy access to search for and validate the presence of all cities.",
      "• Identified and resolved bugs identified by the test team, ensuring smooth functionality and a seamless user experience.",
      "• Authored comprehensive documentation for the project, providing clear guidelines for usage, maintenance, and troubleshooting.",
    ],
    slide: [{ img: `${ui_orase1}` }, { img: `${ui_orase2}` }],
    linkGit: "https://github.com/peviitor-ro/ui.orase",
    linkSite: "https://peviitor-ro.github.io/ui.orase/",
  },
  {
    project: scraper_ui,
    title: "Scraper-UI",
    languageUsed: " Html, CSS, Vanilla JavaScript",
    descriptionProject: [
      "• Redesigned and enhanced web scrapers developed by colleagues to improve responsiveness and introduce new features.",
      <br />,
      "• Enhanced manual testing process for testers, enabling more efficient task execution.",
      <br />,
      "• Identified and resolved bugs in existing scrapers to ensure smooth functionality and optimal performance.",
      <br />,
      "• Developed intuitive user interfaces to streamline the scraping process and improve user experience.",
    ],
    slide: [{ img: `${scraper_ui1}` }, { img: `${scraper_ui2}` }],
    linkGit: "https://github.com/peviitor-ro/Scrapers-UI",
    linkSite: "https://scrapers.peviitor.ro/",
  },
  {
    project: Book_App,
    title: "Book App",
    linkGit: "https://github.com/OvidiuAl3x/books.git",
    languageUsed: "React, Node.Js, Express.Js, MongoDB",
    descriptionProject: [
      "This MERN stack project, enriched with Tailwind CSS, Material-UI's DataGrid, and React Icons, seamlessly combines functionality and aesthetics. With SweetAlert2 integrated for alerts and a robust communication mechanism between frontend and backend via HTTP requests, the application delivers an engaging and user-friendly experience. The backend, powered by Express.js and Node.js, employs essential middleware and libraries for secure and efficient operation.",
    ],
    slide: [
      {
        img: `${B1}`,
        title: "Home Page",
        descriptionImage: [
          "The home page provides an overview of all available books. Users can browse through the collection, apply filters based on categories, years, authors, or use the search functionality. The filters are designed to work harmoniously, allowing users to refine their search based on multiple criteria simultaneously.",
          "If logged in as an admin, users gain access to an enhanced navigation bar that includes the ability to edit books. This empowers administrators to manage the book catalog efficiently.",
        ],
      },
      {
        img: `${B2}`,
        title: "Login and Register",
        descriptionImage:
          "The login page serves as the gateway to the application. Users can access the entire collection of books without logging in, but certain actions, such as adding books to the wishlist, require authentication. If users attempt to perform a restricted action without an account, they are seamlessly redirected to the registration page to create an account.",
      },
      { img: `${B4}`, title: "Filter", descriptionImage: "" },
      {
        img: `${B5}`,
        title: "My Books / Footer",
        descriptionImage: [
          "For logged-in users, the home page offers the added functionality of creating a wishlist by adding books. Additionally, users can explore the detailed information about each book, including reviews and leave their own feedback.",
          "The footer section includes a brief description, the project's logo, and convenient links to social media platforms. Quick links provide users with easy access to essential pages, enhancing navigation efficiency.",
        ],
      },
      {
        img: `${B6}`,
        title: "Book table",
        descriptionImage: [
          "On the Edit Books Page, the book entries are displayed in a table created using Material-UI's DataGrid. This powerful component streamlines the presentation and management of book data, providing admins with an intuitive and efficient interface for editing and organizing the book catalog.",
        ],
      },
      {
        img: `${B7}`,
        title: "Add / Edit Books",
        descriptionImage: [
          "On the create book page, users can contribute to the catalog by adding new books. The form prompts users to enter essential details such as title, author, publish year, and more. Users can select multiple categories and upload an image, with a live preview option. There's also a feature to cancel image upload.",
        ],
      },
      {
        img: `${B8}`,
        title: "Books Details",
        descriptionImage: [
          "Individual book pages showcase detailed information about a specific book. Users can read a synopsis, view reviews, and leave their own feedback if logged in. This page provides an immersive experience for users to engage with the content.",
        ],
      },
      {
        img: `${B9}`,
        title: "Add Review and Reviews",
        descriptionImage:
          "The reviews section below the book details displays user-generated feedback. Logged-in users can contribute by adding, deleting, or editing their reviews. This interactive feature encourages community engagement and discussions about the books.",
      },
    ],
  },
  {
    project: ECommerce,
    title: "E-Commerce",
    linkGit: "https://github.com/OvidiuAl3x/shopping-cart",
    languageUsed: "Tailwind, React, JSON-Server, Redux",
    descriptionProject: [
      "• React E-Commerce Platform with Tailwind, React Icons, Redux, and React Router",
      <br />,
      "• This dynamic web application is crafted with precision using React, backed by a JSON server for efficient data management. The use of Tailwind ensures a visually stunning and responsive design that adapts flawlessly to various devices, providing a user-friendly interface.",
      <br />,
      "• To enhance the user interface, React Icons have been seamlessly integrated, offering a visually appealing and consistent iconography throughout the application. Navigation is made smooth and intuitive with the incorporation of React Router, allowing users to effortlessly explore different sections of the platform",
      <br />,
      "•  The power of state management is harnessed through React Redux, ensuring a smooth flow of data and an efficient user experience. As users explore the platform, they can add desired items to their cart or wishlist, creating a personalized shopping journey tailored to their preferences.",
      <br />,
      "• Utilized Material UI to create an intuitive interface for website users",
    ],
    slide: [
      { img: `${Cart1}`, title: "Home Page" },
      { img: `${Cart2}`, title: "Home Page 2" },
      { img: `${Cart3}`, title: "Men Categories" },
      { img: `${Cart4}`, title: "Men Clothes" },
      { img: `${Cart5}`, title: "Whislist" },
      { img: `${Cart6}`, title: "Cart Page" },
    ],
  },
  {
    project: Recipe_App,
    title: "Recipe App",
    languageUsed: "HTML, CSS, Material UI, JavaScript, React",
    descriptionProject: [
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
    project: Quotes,
    title: "Random Quotes App",
    linkGit: "https://github.com/OvidiuAl3x/random-quotes-app",
  },
  {
    project: Movies_App,
    title: "Movies App",
    languageUsed: "HTML, CSS, BootStrap, JavaScript, PHP",
    descriptionProject: [
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
    project: blog,
    title: "Blog About Animals",
    languageUsed: "HTML, SCSS, JavaScript",
    descriptionProject: [
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
    project: Quizz,
    title: "Quizz APP",
    linkGit: "https://github.com/OvidiuAl3x/Quizz-App",
  },
  {
    project: to_do,
    title: "To Do APP",
    linkGit: "https://github.com/OvidiuAl3x/To-Do-App",
  },
  {
    project: Weather,
    title: "Weather APP",
    linkGit: "https://github.com/OvidiuAl3x/Weather-App",
  },
];
