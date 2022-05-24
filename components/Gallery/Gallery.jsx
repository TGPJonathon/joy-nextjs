import Image from 'next/image';
import { useState } from 'react';

import Modal from '../Modal/Modal';

import classes from './Gallery.module.css';

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [currentPicture, setCurrentPicture] = useState('');

  const images = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];

  return (
    <section className={classes.gallery}>
      {images.map((image, index) => {
        return (
          <div
            onClick={() => {
              setShowModal(true);
              setCurrentPicture(`/media/${image}.webp`);
            }}
            className={classes.expand}
            key={index}
          >
            <Image
              src={`/media/${image}.webp`}
              alt="temp"
              height={500}
              width={500}
            />
          </div>
        );
      })}

      {currentPicture && (
        <Modal
          content={
            <Image src={currentPicture} alt="temp" height={500} width={500} />
          }
          visible={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
