import Head from 'next/head';
import { useState } from 'react';
import { JobListContainer } from '../components/JobListContainer';
import { JobSearchInput } from '../components/JobSearchInput';
import { Navbar } from '../components/Navbar';

export default function Home({ jobs }) {
  const [jobsList, setJobsList] = useState(jobs);
  const [state, setState] = useState('idle');

  const searchForJobs = async (tag) => {
    setState('loading');
    const res = await fetch(`api/search?tag=${tag}`);
    const jobs = await res.json();

    setJobsList(jobs);
    setState('idle');
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <JobSearchInput handleClick={searchForJobs} />
        {state === 'loading' ? (
          'Loading...'
        ) : (
          <JobListContainer jobs={jobsList} />
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'http://jobs.github.com/positions.json?description=ruby&page=1'
  );
  const jobs = await res.json();
  return {
    props: {
      jobs,
    },
  };
}
