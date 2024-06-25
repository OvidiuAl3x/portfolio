import ui_orase1 from "../assets/project_img/ui-orase/ui-orase.jpeg";
import ui_orase2 from "../assets/project_img/ui-orase/Screenshot_24-5-2024_114336_peviitor-ro.github.io.jpeg";

import scraper_ui1 from "../assets/project_img/scraper-ui/scraper_ui1.jpeg";
import scraper_ui2 from "../assets/project_img/scraper-ui/scraper_ui2.jpeg";

// Books Site
import B1 from "../assets/project_img/Books/home.png";
import B2 from "../assets/project_img/Books/login.png";
import B4 from "../assets/project_img/Books/home_filters.png";
import B5 from "../assets/project_img/Books/myBooks_footer.png";
import B6 from "../assets/project_img/Books/books_table.png";
import B7 from "../assets/project_img/Books/create_book.png";
import B8 from "../assets/project_img/Books/book_details.png";
import B9 from "../assets/project_img/Books/add_review.png";

// E-commerce
import Cart1 from "../assets/project_img/e-commerce/home.jpeg";
import Cart2 from "../assets/project_img/e-commerce/home_2.png";
import Cart3 from "../assets/project_img/e-commerce/home_3.png";
import Cart4 from "../assets/project_img/e-commerce/men_section.jpeg";
import Cart5 from "../assets/project_img/e-commerce/men_clothes.jpeg";
import Cart6 from "../assets/project_img/e-commerce/wishlist.jpeg";
import Cart7 from "../assets/project_img/e-commerce/cart.jpeg";

export interface ProjectData {
  title: string;
  technologies: string[];
  description: JSX.Element;
  images: string[];
  githubLink: string;
  liveLink?: string;
}

export const projectData: ProjectData[] = [
  {
    title: "City Search Application",
    technologies: ["Html", "CSS", "Vanilla JavaScript", "ES6 features"],
    description: (
      <>
        Developed a robust{" "}
        <span className="italic text-textWhite">city search functionality</span>{" "}
        using <span className="italic text-textWhite">vanilla JavaScript</span>,
        fetching and processing data from APIs with{" "}
        <span className="italic text-textWhite">async/await and Promises</span>.
        Implemented{" "}
        <span className="italic text-textWhite">
          dynamic search results rendering
        </span>{" "}
        with <span className="italic text-textWhite">template literals</span>{" "}
        and <span className="italic text-textWhite">DOM manipulation</span>, and
        validated user input with{" "}
        <span className="italic text-textWhite">regular expressions</span>,
        offering{" "}
        <span className="italic text-textWhite">real-time feedback</span>.{" "}
        <span className="italic text-textWhite">Streamlined</span> the{" "}
        <span className="italic text-textWhite">database testing process</span>{" "}
        by creating an{" "}
        <span className="italic text-textWhite">intuitive interface</span> for
        testers to verify city data completeness. Identified and resolved{" "}
        <span className="italic text-textWhite">bugs</span> to ensure{" "}
        <span className="italic text-textWhite">smooth functionality</span>, and
        authored comprehensive{" "}
        <span className="italic text-textWhite">project documentation</span> for
        usage, maintenance, and troubleshooting.
      </>
    ),
    images: [ui_orase1, ui_orase2],
    githubLink: "https://github.com/peviitor-ro/ui.orase",
    liveLink: "https://peviitor-ro.github.io/ui.orase/",
  },
  {
    title: "Scraper-UI",
    technologies: ["Html", "CSS", "Vanilla JavaScript", "ES6 features"],
    description: (
      <>
        Redesigned and enhanced web scrapers developed by colleagues to improve{" "}
        <span className="italic text-textWhite">responsiveness</span> and
        introduce new features. Enhanced{" "}
        <span className="italic text-textWhite">manual testing process</span>{" "}
        for testers, enabling more efficient task execution. Identified and
        resolved <span className="italic text-textWhite">bugs</span> in existing
        scrapers to ensure smooth functionality and optimal performance.
        Developed{" "}
        <span className="italic text-textWhite">intuitive user interfaces</span>{" "}
        to streamline the scraping process and improve user experience.
      </>
    ),
    images: [scraper_ui1, scraper_ui2],
    githubLink: "https://github.com/peviitor-ro/Scrapers-UI",
    liveLink: "https://scrapers.peviitor.ro/",
  },
  {
    title: "Book App",
    technologies: ["React", "Node.Js", "Express.Js", "MongoDB"],
    description: (
      <>
        This MERN stack project, enriched with{" "}
        <span className="italic text-textWhite">Tailwind CSS</span>,{" "}
        <span className="italic text-textWhite">Material-UI's DataGrid</span>,
        and <span className="italic text-textWhite">React Icons</span>,
        seamlessly combines functionality and aesthetics. SweetAlert2 handles
        alerts, while robust communication between frontend and backend via HTTP
        requests ensures a smooth user experience. The backend, leveraging{" "}
        <span className="italic text-textWhite">Express.js</span> and{" "}
        <span className="italic text-textWhite">Node.js</span>, utilizes
        essential middleware and libraries for secure and efficient operation.
        <br />
        <span className="italic text-textWhite">More Details on Github</span>
      </>
    ),
    images: [B1, B2, B4, B5, B6, B7, B8, B9],
    githubLink: "https://github.com/OvidiuAl3x/books.git",
  },
  {
    title: "E-Commerce",
    technologies: ["Tailwind", "React", "Redux", "JSON-Server"],
    description: (
      <>
        This dynamic e-commerce platform leverages{" "}
        <span className="italic text-textWhite">React</span> for frontend
        development, enhanced by{" "}
        <span className="italic text-textWhite">Tailwind CSS</span> for
        responsive design and{" "}
        <span className="italic text-textWhite">React Icons</span> for
        consistent iconography. It uses{" "}
        <span className="italic text-textWhite">React Router</span> for seamless
        navigation and <span className="italic text-textWhite">Redux</span> for
        efficient state management. Integrated with{" "}
        <span className="italic text-textWhite">Material UI</span>, the platform
        provides an intuitive user experience. Built with{" "}
        <span className="italic text-textWhite">JSON Server</span> for efficient
        data management, this project delivers a personalized shopping journey
        with robust functionality and a visually appealing interface.
        <br />
        <span className="italic text-textWhite">More Details on Github</span>
      </>
    ),
    images: [Cart1, Cart2, Cart3, Cart4, Cart5, Cart6, Cart7],
    githubLink: "https://github.com/OvidiuAl3x/shopping-cart",
  },
];
