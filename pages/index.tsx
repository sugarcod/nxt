import { useState } from "react";
import { Button, Htag, Tag, PTag } from "../components";
import { Rating } from "../components/Rating/Rating";
import { Layout } from "../layout/Layout";

export default function Home(): JSX.Element {
  const [rat, setRat] = useState(0);

  return (
    <Layout>
      <div className="container">
        <Htag tag="h1">Tag</Htag>
        <Button appearance="primary" arrow="right" className="lol">
          Lol kek
        </Button>
        <Button appearance="ghost" arrow="down" className="lol">
          Lol kek
        </Button>
        <PTag size="s">Smaall Lorem ipsum dolor sit amet consectetur.</PTag>
        <PTag size="m">MediumLorem ipsum dolor sit amet consectetur.</PTag>
        <PTag size="l">Large Lorem ipsum dolor sit amet consectetur.</PTag>
        <PTag size="s">Large Lorem ipsum dolor sit amet consectetur.</PTag>

        <Tag size="s" color="primary">
          tagi1
        </Tag>
        <Tag size="m" href="https://google.com" color="green">
          tagi1
        </Tag>
        <Rating rating={5} setRating={setRat} />
        <Rating rating={4} setRating={setRat} />
        <Rating rating={2} setRating={setRat} />
        <Rating rating={1} setRating={setRat} isEditable={true} />
      </div>
    </Layout>
  );
}

// css in js
{
  /* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style> */
}
