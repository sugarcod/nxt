import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Tag, PTag, Input, Textarea } from "../components";
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { Product } from "../components/Product/Product";

function Home({menu}: HomeProps): JSX.Element {
  const [rat, setRat] = useState(0);
  console.log(process.env.NEXT_PUBLIC_DOMAIN, 'NEXT_PUBLIC_DOMAIN');
  

  return (
    <>
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

        <Input placeholder="Rating"/>

      

       
      </div>
    </>
  );
}

export default withLayout(Home);

// css in js

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


      export const getStaticProps: GetStaticProps = async() => {
        const firstCategory = 0;
        const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
          firstCategory
        });
        return {
          props: {
            menu,
            firstCategory
          }
        }
      }


      interface HomeProps extends Record<string, unknown> {
        menu: MenuItem[];
        firstCategory: number;
      }