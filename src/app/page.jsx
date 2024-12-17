import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';
import { Suspense } from 'react';
import Loading from './Loading'; // Import the global Loading component


export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      body: JSON.stringify({ limit: 9, order: 'desc' }),
      cache: 'no-store',
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log('Error getting post:', error);
  }
  return (
    <Suspense fallback={<Loading />}>
    <div className="flex flex-col">
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/Trees.png')]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col justify-center gap-6 p-28 px-10 max-w-7xl mx-auto">
          <h1 className="text-white text-3xl font-bold lg:text-5xl">About Sebentala</h1>
          <p className="text-white text-sm sm:text-base md:text-md lg:text-xl font-medium">
            Sebentala moves to contribute the sustainability of three important points in life of people, planet, and profit #sebentalaasah #sebentalaasih #sebentalaasuh
          </p>
        </div>
      </section>

      {/*<section>
      <div className='items-center justify-center p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      </section>*/}

      <section id="recent-posts" className="p-3 flex flex-col gap-8 py-7">
        <RecentPosts limit={6} />
        <Link
          href={'/search?category=null'}
          className='text-lg text-teal-500 hover:underline text-center'
          >
          View all posts
        </Link>        
      </section>
    </div>
  </Suspense>
  );
}