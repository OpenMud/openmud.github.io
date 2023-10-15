import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compatible with Byond',
    Svg: require('@site/static/img/ben-Jigsaw-Puzzle.svg').default,
    description: (
      <>
        OpenMud is designed to support open source games targeting the Byond Engine, as well as motivating the creation of new open-source, community driven games.
      </>
    ),
  },
  {
    title: 'Easy to Use & Extensible',
    Svg: require('@site/static/img/hammer-peterm1.svg').default,
    description: (
      <>
        The primary goal of OpenMud is to enable users to focus on the story of their MUD, without having to worry about the technical details around building a multiplayer game.
      </>
    ),
  },
  {
    title: 'Portable',
    Svg: require('@site/static/img/1677243125responsive-web-design.svg').default,
    description: (
      <>
      OpenMud's client component is implemented using React, enabling you to deploy the client anywhere ranging from the Web, Desktop, or Mobile Devices.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
