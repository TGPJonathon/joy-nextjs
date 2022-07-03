import Link from 'next/link';

import StoreElement from '../../components/StorePage/StoreElement';

import classes from './StoreItems.module.css';

export default function StoreItems({ items }) {
  return (
    <section id="storeItems" className={classes.storeItems}>
      {items.map((item, index) => {
        const { attributes } = item;
        return (
          <Link key={index} href={`/store/${item.id}`}>
            <a>
              <StoreElement
                // image={`${attributes.Image.data.attributes.url}`}
                // title={attributes.Name}
                // price={`$${attributes.Price}`}
                image={item.image}
                title={item.title}
                price={`$${item.price}`}
              />
            </a>
          </Link>
        );
      })}
    </section>
  );
}
