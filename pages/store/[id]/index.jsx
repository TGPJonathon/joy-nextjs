import { Fragment } from 'react';
import ItemPage from '../../../components/StorePage/ItemPage';

export default function Store({ item }) {
  const { data } = item;
  const { attributes } = data;

  return (
    <Fragment>
      <main>
        <ItemPage
          id={data.id}
          image={`http://localhost:1337${attributes.Image.data.attributes.url}`}
          name={attributes.Name}
          price={`$${attributes.Price}`}
          description={attributes.Description}
        />
      </main>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const result = await fetch(
    `http://localhost:1337/api/stores/${params.id}?populate=*`
  );
  const item = await result.json();

  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetch('http://localhost:1337/api/stores');
  const results = await items.json();
  const { data } = results;

  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}
