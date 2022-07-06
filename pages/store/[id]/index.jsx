import { Fragment } from 'react';
import Header from '../../../components/StorePage/Header';
import ItemPage from '../../../components/StorePage/ItemPage';

export default function Store({ item }) {
  const { data } = item;
  const { attributes } = data;
  const imageUrl = data.attributes.Image.data.attributes.url.split(
    'https://strapi-joy.s3.amazonaws.com/'
  )[1];

  return (
    <Fragment>
      <Header numItems={'single'} />
      <ItemPage
        id={data.id}
        image={`https://d2dw0u3k29fc6y.cloudfront.net/${imageUrl}`}
        name={attributes.Name}
        price={`$${attributes.Price}`}
        description={attributes.Description}
      />
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
