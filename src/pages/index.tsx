import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MagazineCarousel from '../components/MagazineCarousel';
import styles from './index.module.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// @ts-ignore
import {images} from '../../static/data/homepage_carousel.json';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
       <div className="hero__title">{siteConfig.title}</div>
       <div className="hero__prof">By Dr. Juan-Pablo Correa-Baena</div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Our group works on the understanding and design of defects in the bulk and at the interfaces of 
      semiconductors by novel deposition and characterization techniques. We study how dimensionality 
      and chemical composition in semiconductors affect electronic defect formation and strive to design 
      deposition methods that allow us to control these materials at the nanoscale.">
      <HomepageHeader />
      <main>
        <div className="container">
          <br/>
          <div className="container info">
          <div className="hero__subtitle">
          Our group develops advanced deposition and characterization techniques to understand and design defects in semiconductors, focusing on the impact of dimensionality and chemical composition on electronic defect formation and developing nanoscale control.
          </div>
        </div>
        </div>
        <div className="container">
        <h1><p className="heading new_title">News and Updates</p></h1>
        </div>
        <div className="social">
          <div className="container twitter">
            <div className='tweets'>
              <TwitterTimelineEmbed
              sourceType="profile"
              screenName="BaenaLab"
              options={{height: 600, width: "100%"}}
            />
            </div>
          </div>
          <div className="container carousel">
            <MagazineCarousel images={images}/>
          </div>
        </div>
      </main>
    </Layout>
  );
}
