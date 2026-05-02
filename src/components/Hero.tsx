import { property } from '../content/property';
import coverImage from '../assets/images/cover.jpg';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <section className={classes.hero} aria-label="Welcome">
      <img
        src={coverImage}
        alt="The River House at dusk along the Cowlitz River"
        className={`${classes.media} hero-media`}
        fetchPriority="high"
        decoding="async"
      />
      <div className={classes.scrim} aria-hidden="true" />
      <div className={classes.content}>
        <p className={classes.kicker}>{property.location}</p>
        <h1 className={classes.title}>{property.name}</h1>
        <p className={classes.tagline}>{property.tagline}</p>
      </div>
      <div className={classes.scrollHint} aria-hidden="true">
        <span>Your guide</span>
        <span className={classes.scrollLine} />
      </div>
    </section>
  );
}
