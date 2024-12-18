import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';
import { Suspense } from 'react';
import Loading from './Loading'; // Import the global Loading component
import { Button } from 'flowbite-react';

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
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/boudhayan.jpg')]">
        <div className="absolute inset-0 bg-emerald-900 bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col justify-center gap-4 p-20 px-10 max-w-7xl mx-auto md:translate-y-6 lg:translate-y-3 xl:translate-y-10">
          <h1 className="text-white text-3xl font-bold lg:text-5xl">Sébentala</h1>
          <h1 className="text-xl font-bold lg:text-3xl bg-gradient-to-r from-white via-cyan-300 to-cyan-600 bg-clip-text text-transparent">Sé Bentala. Satu Bumi. One Earth.</h1>
          <p className="text-white text-sm sm:text-base md:text-md lg:text-xl">
            Sébentala moves to contribute the sustainability of three important points in life of people, planet, and profit.
            Sébentala occurs as an answer to the current needs of Mother Earth.
          </p>
          <p className="text-sm sm:text-base md:text-md lg:text-xl font-medium bg-gradient-to-r from-white via-cyan-300 to-cyan-600 bg-clip-text text-transparent">
           'Journey towards sustainability<span className='text-green-400'>🍃</span>'
          </p>
          <p className="text-white text-xs sm:text-base md:text-md lg:text-md font-medium m-0 p-0 leading-none mb-4">
           #sébentalaasah #sébentalaasih #sébentalaasuh  
          </p>
          <div className='flex flex-wrap sm:mb-0 md:mb-8 lg:mb-14 xl:mb-28'>
             <Button gradientMonochrome="cyan" href='#recent-posts'>Explore our posts</Button>
          </div>
        </div>
        
      </section>

      {/*<section>
      <div className='items-center justify-center p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      </section>*/}

     
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/imagebckseb.png')] h-[65vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,52,36,0.7)] to-[rgba(72,187,120,0.7)]"></div>

        <div className="p-4 max-w-4xl mx-auto relative z-10">
          {/* Title */}
          <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
            Calling all young changemakers!
          </h1>
          <h1 className="font-dancing text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold mb-8 px-14 bg-gradient-to-r from-white via-cyan-100 to-cyan-500 bg-clip-text text-transparent">
            To become a pioneer in adopting an eco-friendly lifestyle and supporting the Sustainable Development Goals.
          </h1>
          
        </div>
      </section>




      <section id="recent-posts" className="p-3 flex flex-col gap-8 py-7">
        <RecentPosts limit={3} />
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
