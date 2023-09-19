import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import News from "./components/News";
import Story from "./components/Story";

//import App from "./App";

import "./styles.css";

function App() {
  return (
    <div>
      <News>
        <Story
          key="index"
          id="0"
          image="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          title="Why 'getting lost in a book' is so good for you, according to science"
          link="https://www.nbcnews.com/better/pop-culture/why-getting-lost-book-so-good-you-according-science-ncna893256"
          author="Sarah DiGiulio"
          description="“Transportation” — or the act of losing yourself in a book — makes you more empathetic, more creative and (hello!) it’s an escape."
        />
        <Story
          key="l"
          id="1"
          image="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          title="The 41 best books to gift in 2020"
          link="https://www.today.com/shop/12-best-books-gift-holiday-season-t144873"
          author="Courtney Gisriel and Rylee Johnston"
          description="The best nights are those spent cozied up on the couch with a good book in hand. For the friends or family members who enjoy a good story, one of the best gifts you can surprise them with is a handpicked book."
        />
        <Story
          key="m"
          id="2"
          image=""
          title="Jenna Bush Hager's August 2023 book club pick is a timeless classic"
          link="https://www.today.com/popculture/read-jenna-book-club-pick-august-2023-t292373?search=books"
          author="Anna Kaplan"
          description="Jenna calls it a little vacation in a book."
        />
        <Story
          key="n"
          id="3"
          image="https://images.unsplash.com/photo-1462903876006-77f6beb241b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          title="It's always vacation in Emily Henry's world"
          link="https://www.today.com/popculture/books/emily-henry-interview-rcna80292"
          author="Anna Kaplan"
          description="A bestselling romance empire. Movie adaptations on the horizon. Legion devoted fans. What's behind the Emily Henry mania? We asked her."
        />
      </News>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
