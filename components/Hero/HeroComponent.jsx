import Image from 'next/image';

import classes from './HeroComponent.module.css';

export default function HeroComponent({
  imageSrc,
  alt,
  pictureClass,
  filter,
  title,
}) {
  const imageBlur = {
    filter: 'brightness(50%)',
  };

  return (
    <div className={classes[pictureClass]}>
      <Image
        src={imageSrc}
        alt={alt}
        width={2000}
        height={2000}
        style={filter ? imageBlur : ''}
      />
      {title && <h1 className={classes.title}>{title}</h1>}
    </div>
  );
}
