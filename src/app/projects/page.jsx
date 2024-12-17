import CallToAction from '../components/CallToAction';
import { Suspense } from 'react';
import Loading from '../Loading';

export default function Projects() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
        <h1 className='text-3xl font-semibold'>Projects</h1>
        <p className='text-md text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <CallToAction />
      </div>
    </Suspense>
  );
}