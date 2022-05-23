import SideBar from '../SideBar/SideBar';

import Trophy from '../../../public/icons/trophy-outline.svg';

import classes from './Content.module.css';
import { Fragment } from 'react';

export default function Content() {
  return (
    <Fragment>
      <header className={classes.header_content}>
        <h2 className={classes.about_title}>Who Am I?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          temporibus in accusantium eligendi, ad eius autem sapiente excepturi
          voluptatem at ut quam, cupiditate natus sunt quo eum repellat maxime
          quaerat!
        </p>
      </header>
      <section className={classes.flex}>
        <div className={classes.left}>
          <div className={classes.text}>
            <p>
              Joy Anjelica is an award-winning slam champion, open mic host,
              content creator, closet Soundcloud rapper, and social media
              manager based out of the DMV area. Joy graduated from Morgan State
              University in 2018, with a B.A. in Psychology and a minor in
              Creative Writing.
            </p>
            <p>
              Her debut collection of poetry, Growing Pains, was published in
              2020 at the beginning of the current global pandemic. The Founder
              of Oxon Hill High School's Slam Team, founder of MSUPoets, and
              former member of both the Baltimore City Youth Poetry Slam Team
              and Words Beats and Life Youth Poetry Slam Teams explores art not
              only through writing but through multi-media production and
              content creation.
            </p>
            <p>
              Her creative portfolio explores themes of womanhood, hip-hop,
              blackness, love, mental health, substance abuse, and race
              relations, utilizing a multitude of creative lenses. Beginning her
              poetry career in 2013, Joy has won multiple awards including DC
              Youth Slam's MC Olympics in 2014, 3rd Place in Baltimore's Grand
              Slam Championship in 2016, and is a former Baltimore City Youth
              Poetry Ambassador (2015). She is also an NAACP ACT-SO finalist
              receiving silver and bronze medals for poetry and oratory (2015).
              She is a 2xs competitor at the Brave New Voices international
              poetry slam, consecutively performing on the final stage both
              years she competed in the competition.
            </p>
            <p>
              She has dedicated almost a decade to honing her skills and
              creating communities for young artists from all walks of life, and
              across all mediums, hosting open mics, hip hop cyphers, workshops,
              and artist showcases. Joy was also previously the mid-Atlantic
              region Mawa Scribes champion (2016) and has featured at many
              notable venues such as DC's Kennedy Theater, The Arc Theater, and
              Bus Boys and Poets. Joy views art as a vehicle for change and
              social justice through entertaining and also educating audiences.
            </p>
            <p>
              Joy currently works as a program manager and social media
              coordinator in the public health field concentrating on substance
              use and sexual reproductive health for the Baltimore City Health
              Department and ETR. Joy also hosts, ENJOY THE MIC on 2nd and 4th
              Thursdays at Next Phaze Cafe, 112. E Lexington Street.
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <SideBar icon={<Trophy />} text="Award Winning Poet" />
          <SideBar icon={<Trophy />} text="Amazing Host" />
          <SideBar icon={<Trophy />} text="Activist" />
          <SideBar icon={<Trophy />} text="Author" />
        </div>
      </section>
    </Fragment>
  );
}
