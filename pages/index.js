import Head from 'next/head'
import { JobSearchInput } from '../components/JobSearchInput'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />


      <main >   

      <JobSearchInput />   

      </main>

      
    </div>
  )
}
