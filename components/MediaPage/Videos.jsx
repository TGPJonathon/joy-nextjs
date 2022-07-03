import Image from 'next/image';
import { useState } from 'react';

import Modal from '../Modal/Modal';
import Play from '../../public/icons/play.svg';

import classes from './Videos.module.css';

export default function Videos() {
  const [currentVideo, setCurrentVideo] = useState('');
  const [showModal, setShowModal] = useState(false);

  const videosInfo = [
    [
      'y0DA6BhUqA8',
      '/joy/here_lies_the_heavens.jpg',
      'Here Lies The Heavens',
      'Random Text',
    ],
    ['8-A_CcAa5Ps', '/joy/joy2.jpeg', 'Second Hand Smoke', 'More Random Text'],
    ['jHhWm7ILnb0', '/joy/fine_dining.jpg', 'Fine Dining', 'Random Random'],
  ];

  return (
    <section className={classes.videos} id="videos">
      {videosInfo.map((video, index) => {
        return (
          <article key={index} className={classes.videoDescription}>
            <div
              onClick={() => {
                setShowModal(true);
                setCurrentVideo(
                  `https://www.youtube-nocookie.com/embed/${video[0]}`
                );
              }}
              className={classes.video}
            >
              <Image src={`${video[1]}`} height={500} width={500} alt="poem" />
              <div className={classes.area}>
                <div className={classes.icon}>
                  <Play />
                </div>
              </div>
            </div>
            <div className={classes.text}>
              <p className={classes.videoTitle}>{video[2]}</p>
              <p>{video[3]}</p>
            </div>
          </article>
        );
      })}

      {currentVideo && (
        <Modal
          content={
            <iframe
              className={classes.frame}
              width="560"
              height="315"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          }
          visible={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
