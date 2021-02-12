import Head from 'next/head'
import { JobListContainer } from '../components/JobListContainer'
import { JobSearchInput } from '../components/JobSearchInput'
import { Navbar } from '../components/Navbar'

export default function Home({jobs}) {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />


      <main >   

      <JobSearchInput />   

      <JobListContainer jobs={jobs} />

      </main>

      
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://jobs.github.com/positions.json?description=ruby&page=1')
  const jobs = await res.json()  
  return {
    props: {
      jobs,
    },
  }
}