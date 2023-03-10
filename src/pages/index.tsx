import Head from 'next/head';
import Highlight from 'src/components/highlight';
import TimeContainer from 'src/components/Time-Box';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='px-10 pt-5'>
          <header>
            <h1>
              MY VISION. <strong>"Go abroad"</strong>
            </h1>
          </header>
          <section className='flex justify-between'>
            <article>
              <Highlight />
            </article>
            <article>
              <h3>Plan</h3>
              <TimeContainer />
            </article>
            <article>
              <h3>Current</h3>
              <TimeContainer />
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
