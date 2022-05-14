import Image from 'next/image';

import classes from './Images.module.css';

export default function Images({ picture, alt, layout, height, width }) {
  return (
    <div>
      <Image
        className={classes.image}
        src={picture}
        alt={alt}
        layout={layout}
        height={'100%'}
        width={'100%'}
      />
    </div>
  );
}
