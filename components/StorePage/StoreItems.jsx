import Link from 'next/link';

import StoreElement from '../../components/StorePage/StoreElement';

import classes from './StoreItems.module.css';

export default function StoreItems({ items }) {
  return (
    <section id="storeItems" className={classes.storeItems}>
      {items.map((item, index) => {
        const { attributes } = item;
        const imageUrl = attributes.Image.data.attributes.url.split(
          'https://strapi-joy.s3.amazonaws.com/'
        )[1];

        return (
          <Link key={index} href={`/store/${item.id}`}>
            <a>
              <StoreElement
                image={`https://d2dw0u3k29fc6y.cloudfront.net/${imageUrl}`}
                title={attributes.Name}
                price={`$${attributes.Price}`}
              />
            </a>
          </Link>
        );
      })}
    </section>
  );
}
