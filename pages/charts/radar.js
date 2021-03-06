import Head from 'next/head';

import Radar from '../../demos/vis/showcase-sections/radar-showcase';

const RadarPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/react-vis.css" />
    </Head>
    <Radar />
  </>
);

export default RadarPage;
