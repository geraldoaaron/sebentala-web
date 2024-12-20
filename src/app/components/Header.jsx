'use client';
import { Button, Navbar, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { dark, light } from '@clerk/themes';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';



export default function Header() {
const path = usePathname();
const { theme, setTheme } = useTheme();
const router = useRouter();
const [searchTerm, setSearchTerm] = useState('');
const searchParams = useSearchParams();
const handleSubmit = (e) => {
  e.preventDefault();
  const urlParams = new URLSearchParams(searchParams);
  urlParams.set('searchTerm', searchTerm);
  const searchQuery = urlParams.toString();
  router.push(`/search?${searchQuery}`);
};
useEffect(() => {
  const urlParams = new URLSearchParams(searchParams);
  const searchTermFromUrl = urlParams.get('searchTerm');
  if (searchTermFromUrl) {
    setSearchTerm(searchTermFromUrl);
  }
}, [searchParams]);

  return (
    <Navbar className='border-b-2 border-cyan-600 bg-cyan-600'>
      <Link
        href='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
      <div>
        <Image 
          src="/images/logosebentala.PNG" 
          alt="Logo"
          width={130}  // Set appropriate width
          height={30}  // Set appropriate height  
        />
      </div>
       
     
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {/*
      < Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      */}
      <div className='flex gap-2 md:order-2'>
      
      <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
      
       </Button>
       
       <SignedIn>
          <UserButton
            appearance={{
              baseTheme: theme === 'light' ? light : dark,
            }}
            userProfileUrl='/dashboard?tab=profile'
          />
        </SignedIn>

        <SignedOut>
            <Link href='/sign-in'>
                <Button gradientDuoTone='greenToBlue' outline>
                Sign In
                </Button>
            </Link>
        </SignedOut>


        <Navbar.Toggle className='text-white bg-gradient-to-tr hover:from-cyan-600 hover:to-green-400 transition-all duration-300'/>
      </div>
      <Navbar.Collapse>
        <Link href='/'>
          <Navbar.Link active={path === '/'} as={'div'} className='text-white'>
            Home
          </Navbar.Link>
        </Link>
        <Link href='/about' >
          <Navbar.Link active={path === '/about'} as={'div'} className='text-white'>
            About
          </Navbar.Link>
        </Link>
        <Link href='/projects'>
          <Navbar.Link active={path === '/projects'} as={'div'} className='text-white'>
            Projects
          </Navbar.Link>
        </Link>
       
        <Navbar.Link href='https://linktr.ee/sebentala?fbclid=PAZXh0bgNhZW0CMTEAAabcZKapmfyADqycG_WOGyHC-xzOqvmPBHRmAgDzppSjiuw6iIwzzv_5ZMo_aem_DCERvlaaXXkXGd4TkE2WRQ' target='_blank' className='text-white'>
        Merchandise
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}