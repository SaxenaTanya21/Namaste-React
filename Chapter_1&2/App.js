import React from "react";
import ReactDOM from "react-dom/client";

// Create a Nested header element using React.createElement(h1,h2,h3 inside a div with class 'title')

const heading1 = React.createElement(
  "h1",
  {
    key: "h1",
  },
  "Heading1"
);

const heading2 = React.createElement(
  "h2",
  {
    key: "h2",
  },
  "Heading2"
);

const heading3 = React.createElement(
  "h3",
  {
    key: "h3",
  },
  "Heading3"
);

const container = React.createElement(
  "div",
  {
    class: "title",
  },
  [heading1, heading2, heading3]
);

//Create the same element using JSX

const heading4 = <h1 key="h1">Heading1!!</h1>;

const HeaderComponent2 = () => {
  return <h2 key="h2">Heading2!!</h2>;
};

// Functional Component
const HeaderComponent = () => {
  return (
    <div>
      {heading4}
      {<HeaderComponent2 />}
      <h3 key="h3">Heading3!!</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
