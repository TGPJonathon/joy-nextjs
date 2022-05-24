import classes from './Youtube.module.css';

export default function Youtube() {
  return (
    <section className={classes.video}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/8-A_CcAa5Ps"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox="allow-scripts allow-presentation allow-same-origin"
      ></iframe>
    </section>
  );
}
