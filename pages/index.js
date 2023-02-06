import Head from 'next/head';
import {useState} from 'react';
import {JobListContainer} from '../components/JobListContainer';
import {JobSearchInput} from '../components/JobSearchInput';
import {Navbar} from '../components/Navbar';

export default function Home({jobs}) {
  const [jobsList, setJobsList] = useState(jobs);
  const [state, setState] = useState('idle');
  const [api, setApi] = useState('github');

  const changeApi = () => {
    setApi;
  };
  const searchForJobs = async (tag, site) => {
    setState('loading');

    const res = await fetch(`api/search?site=${site}&tag=${tag}`);
    const jobs = await res.json();

    setJobsList(jobs);
    setState('idle');
  };
  return (
    <div>
      <Head>
        <title>DevJobs | Find Remote Developer Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <JobSearchInput handleChange={changeApi} handleClick={searchForJobs} />
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
  // http://remoteok.io/api?tags=react
  // http://jobs.github.com/positions.json?description=junior&page=1
  const res = await fetch('https://remotive.io/api/remote-jobs?limit=5');
  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
  };
}
