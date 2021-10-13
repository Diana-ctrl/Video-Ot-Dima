import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";
type PageTitlePropsType = {
  title: string;
};
function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default function App() {
  return (
    <div className="App">
      <input />
      <input type="password" />
      <PageTitle title="This is APP Component" />
      <PageTitle title="My friends" />
      Article 1
      <Rating value={3} />
      <Accordion title="HTML" collapsed={true} />
      <Accordion title="CSS" collapsed={false} />
      Article 2
      <Rating value={1} />
      <Rating value={3} />
      <Rating value={2} />
      <Rating value={1} />
    </div>
  );
}
