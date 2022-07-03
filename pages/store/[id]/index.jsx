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
          image={`${attributes.Image.data.attributes.url}`}
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
    `https://api.joyangelica.com/api/stores/${params.id}?populate=*`
  );
  const item = await result.json();

  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetch('https://api.joyangelica.com/api/stores');
  const results = await items.json();
  const { data } = results;

  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}
