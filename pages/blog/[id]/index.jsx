import { Fragment } from 'react';
import Head from 'next/head';
import Posts from '../../../components/BlogPage/Posts';

export default function Blog({ item }) {
  return (
    <Fragment>
      <Head>
        <title>Thoughts</title>
        <meta name="description" content="My Thoughts" />
      </Head>
      <Posts post={item} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const result = await fetch(
    `https://api.joyangelica.com/api/blogs/${params.id}?populate=*`
  );
  const item = await result.json();

  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetch('https://api.joyangelica.com/api/blogs');
  const results = await items.json();
  const { data } = results;

  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}
