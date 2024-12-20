'use client';
import { Footer } from 'flowbite-react';
import Link from 'next/link';
import {
  BsEnvelope,
  BsInstagram,
  BsWhatsapp,
 
} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-cyan-600 bg-cyan-600'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            {/* Additional content can go here */}
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            {/* Icons can go here */}
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Link
            href='/'
            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
          >
            <img 
              src="/images/logosebentala.png" 
              alt="Logo"
              width={130}  // Set appropriate width
              height={30}  // Set appropriate height  
            />
          </Link>
          <div className='flex gap-6 mt-4 sm:mt-0 justify-end '>
            <Footer.Icon href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRrtbdptxzRSpPqJKbdTLMHVhClPPtMBqqZtTfbcNDpLZzCkhRPkqTDQZkbdcVJbVZjgzn' target='_blank' icon={BsEnvelope} className='text-white' />
            <Footer.Icon href='https://www.instagram.com/sebentala/' target='_blank' icon={BsInstagram} className='text-white'/>
            <Footer.Icon href='https://api.whatsapp.com/send/?phone=628811238124&text&type=phone_number&app_absent=0' target='_blank' icon={BsWhatsapp} className='text-white'/>
          </div>
        </div>
      </div>
    </Footer>

  );
}