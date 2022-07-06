import { Fragment } from 'react';
import Facebook from '../../public/social_media_icons/facebook.svg';
import Instagram from '../../public/social_media_icons/instagram.svg';
import Twitter from '../../public/social_media_icons/twitter.svg';
import Youtube from '../../public/social_media_icons/youtube.svg';

export default function SocialLinks() {
  const socials = [
    <Facebook key={1} />,
    <Instagram key={2} />,
    <Twitter key={3} />,
    <Youtube key={4} />,
  ];

  const titles = ['Facebook', 'Instagram', 'Twitter', 'Youtube'];

  const links = [
    'https://www.facebook.com/JoyfulSoSunnyAnjelica',
    'https://www.instagram.com/accounts/login/?next=/joyanjelica/',
    'https://twitter.com/JoyAnjelica',
    'https://www.youtube.com/channel/UCM6YfalA2ruRBkhh7Jt0eVg',
  ];

  return (
    <Fragment>
      {socials.map((social, index) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            href={links[index]}
            title={titles[index]}
          >
            {social}
          </a>
        );
      })}
    </Fragment>
  );
}
