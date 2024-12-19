import { Suspense } from 'react';
import Loading from '../Loading';
import { Dancing_Script } from "next/font/google";
import { Button, Carousel } from 'flowbite-react';

// Load Dancing Script with desired configuration
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include the font weights you need
  display: "swap", // Prevent font swap flicker
});

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/backseb22.jpg')] h-[65vh]" >
              <div className="absolute inset-0 bg-emerald-900 bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col justify-center gap-4 p-20 px-10 max-w-7xl mx-auto md:translate-y-12 lg:translate-y-16 xl:translate-y-36 xl:px-16">
                <h1 className="text-white text-3xl font-bold lg:text-5xl">About </h1>
                <h1 className="text-white text-3xl font-bold lg:text-5xl">us : </h1>
                <br/>
                <p className="text-white text-sm sm:text-base md:text-md lg:text-xl">
                Examined from the elements of the word, Sébentala consists of two words: Sé and Bentala. Sé means one, singular; and Bentala means earth, land. One earth, one land. No replica can replace the one earth we currently live on.
                </p>
                
              </div>
              
              
        </section>

        <section className="relative bg-emerald-800 bg-center min-h-screen" style={{ backgroundColor: '#365140' }}>
              <div className="absolute inset-0 bg-emerald-900 bg-opacity-70"></div>
              <div className="relative z-10 justify-center gap-6 p-20 px-2 max-w-7xl mx-auto md:translate-y-6 lg:translate-y-3 xl:translate-y-10 grid grid-cols-6">
                <div className="col-start-2 col-end-5"> 
                  <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">sé : &#92;</h1>
                  <h1 className="text-white text-xl font-normal md:text-2xl lg:text-3xl">satu; tunggal; eka; esa</h1>
                </div>
                <div className="col-end-7 col-span-3 md:pl-20 lg:pl-28 pr-10">
                  <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">ben &middot; ta &middot; la &#92;</h1>
                  <h1 className="text-white text-xl font-normal md:text-2xl lg:text-3xl">bumi; tanah</h1>
                </div>

                <div className="col-start-1 col-end-7 mt-40 text-center">
                  <h1 className="font-dancing text-white text-6xl font-bold sm:text-8xl md:text-8xl lg:text-9xl">Solusi</h1>
                  <h1 className="font-dancing text-white text-6xl font-bold sm:text-8xl md:text-8xl lg:text-9xl">Bentala</h1>
                </div>
                <div className="col-start-1 col-end-7 text-center mt-28"> 
                  <h1 className="text-white text-xs font-medium md:text-sm lg:text-md uppercase">-Our vision-</h1>
                  <h1 className="text-white text-xs font-normal md:text-sm lg:text-md px-8 pt-4 sm:px-40 md:px-52 lg:px-52 xl:px-56">Bentala Solution, Earth Solution. From its existence, Sébentala is expected to be able to become a driving force for creating a sustainable and environmentally friendly lifestyle for every soul who has concerned.</h1>
                </div>

                <div className="col-start-2 col-end-4 mt-28 flex items-center justify-center">
                 
                      <img 
                        src="/images/sustainicon.png"
                        alt="Sustain"
                        className="w-72 h-auto object-cover border-4 border-cyan-500 rounded-lg p-2"
                      />
                  
                </div>

                <div className="col-end-6 col-span-2 mt-6 flex items-center justify-center"> 
           
                    <img 
                      src="/images/climateicon.png"
                      alt="Climate"
                      className="w-72 h-auto object-cover border-4 border-cyan-500 rounded-lg p-2"
                    />
               
                </div>
              
              </div>
        
        </section>


        <section className="relative bg-emerald-800 bg-center  min-h-screen" style={{ backgroundColor: '#365140' }}>
              <div className="absolute inset-0 bg-emerald-900 bg-opacity-70"></div>
                
                <div className="relative z-10 justify-center gap-6 p-20 px-2 max-w-7xl mx-auto md:translate-y-0 lg:translate-y-0 xl:translate-y-5 grid grid-cols-6 ">
                  
                  <div className="col-start-1 col-end-7 text-center mb-20"> 
                    <h1 className="text-white text-xs font-medium md:text-sm lg:text-md uppercase">-Our mission-</h1>
                    <h1 className="text-white text-xs font-medium md:text-sm lg:text-md px-8 pt-4 sm:px-40 md:px-52 lg:px-52 xl:px-56">Three missions of Sébentala: #SébentalaAsah #SébentalaAsih #SébentalaAsuh as the core basis of our activity movements.</h1>
                  </div>
                  

                  <div className='col-start-2 col-end-6 flex h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96 sm:col-start-2 sm:col-end-4 '>
                    <Carousel indicators={false} leftControl={<span style={{ display: "none" }} />} rightControl={<span style={{ display: "none" }} />}>
                      <img src="/images/asah.jpg" alt="..." />
                      <img src="/images/asahquote.jpg" alt="..." />
                    
          
                    </Carousel>
                  </div>

                  <div className='col-start-2 col-end-6 grid h-56 gap-4 sm:col-start-4 sm:col-end-6 sm:translate-y-16 md:translate-y-12 lg:translate-y-10 xl:translate-y-14'>
                    <h1 className="text-white text-sm font-medium sm:text-lg md:text-xl lg:text-2xl uppercase">#sebentalaasah</h1>
                    <p className="text-white text-xs sm:text-base md:text-sm lg:text-lg -mt-20">
                    Is a platform for community interest in learning about sustainable lifestyle. 
                    </p>
                  </div>

                  <div className='col-start-1 col-end-7 hidden md:block'></div>
              
                  <div className='col-start-2 col-end-6 flex h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96 sm:col-end-6 sm:col-span-2'>
                    <Carousel indicators={false} leftControl={<span style={{ display: "none" }} />} rightControl={<span style={{ display: "none" }} />}>
                      <img src="/images/asih.jpg" alt="..." />
                      <img src="/images/asihquote.jpg" alt="..." />
                    </Carousel>
                  </div>

                  <div className='col-start-2 col-end-6 grid h-56 gap-4 sm:col-start-2 sm:col-end-4 sm:-mt-52 md:-mt-56 lg:-mt-56 xl:-mt-72'>
                    <h1 className="text-white text-sm font-medium sm:text-lg md:text-xl lg:text-2xl uppercase md:text-right">#sebentalaasih</h1>
                    <p className="text-white text-xs sm:text-base md:text-sm lg:text-lg md:text-right -mt-20">
                    To support small and medium business enterprises who provide environmentally friendly and sustainable products.
                    </p>
                  </div>
                  

                  <div className='col-start-2 col-end-6 flex h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96 sm:col-start-2 sm:col-end-4'>
                    <Carousel indicators={false} leftControl={<span style={{ display: "none" }} />} rightControl={<span style={{ display: "none" }} />}>
                      <img src="/images/asuh.jpg" alt="..." />
                      <img src="/images/asuhquote.jpg" alt="..." />
            
                    </Carousel>
                  </div>
                  <div className='col-start-2 col-end-6 grid h-56 gap-4 sm:col-start-4 sm:col-end-6 sm:translate-y-16 md:translate-y-12 lg:translate-y-10 xl:translate-y-14'>
                    <h1 className="text-white text-sm font-medium sm:text-lg md:text-xl lg:text-2xl uppercase">#sebentalaasuh</h1>
                    <p className="text-white text-xs sm:text-base md:text-sm lg:text-lg -mt-20">
                    Is a form of Sébentala&apos;s concern to support quality education for students at school through the profits obtained from the two previous missions.
                    </p>
                  </div>
                
            
                </div>
              
        </section>

      </div>
    </Suspense>
  );
}