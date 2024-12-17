import { Suspense } from 'react';
import Loading from '../Loading';


export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              LOREM IPSUM
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
              <p>
                TEST{' '}
                <a
                  href=''
                  target='_blank'
                  className='text-teal-500 hover:underline'
                >
                  TEST
                </a>
                .
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}