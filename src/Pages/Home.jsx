'use client'

import React from 'react'
import { CheckCircle, ChevronDown, ChevronUp, Menu, Star, X } from 'lucide-react'
const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  
  {
    name: 'Employers',
    href: '/employer',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full">
      <div className="relative w-full border-b bg-white text-rose-500	">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          
          
          <span className="font-bold nav-heading text-xl">Human Innovation Services</span>
        </div>
        <div className="hidden lg:block text-blue-600">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a href="/hrrecruitmenttraining"><button 
            type="button"
            className="rounded-md bg-rose-500	 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            HR Recruitment Training
          </button></a>
        </div>
        <div className="lg:hidden text-blue-600">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    
                    <span className="font-bold nav-heading">Human Innovation Services</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 text-blue-600" >
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <a href="/hrrecruitmenttraining"><button
                  type="button"
                  className="mt-4 w-full rounded-md bg-rose-500		 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                   HR Recruitment Training
                </button></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      {/* Hero Section */}
        <br></br><br></br>

      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who care about your growth
            </h1>
            <p className="mt-8 text-lg text-gray-700">
            Human Innovation Services has been in the staffing industry with the objective of providing quality and excellent recruitment services.
            </p>
            
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]" 
              src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>

            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Improved hiring decisions</h3>
            <p className="mt-4 text-sm text-gray-600">
            Having HR recruitment skills can help you identify the best candidates for a job, which can result in more successful hires. 
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Cost savings</h3>
            <p className="mt-4 text-sm text-gray-600">
            Effective recruitment can save an organization money by reducing the time and resources required to fill a position.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-600">
                 <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
                <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
                <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
            </svg>

            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Career advancement</h3>
            <p className="mt-4 text-sm text-gray-600">
            Acquiring HR recruitment skills can make you a valuable asset to any organization. 
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-600">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>

            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Increased productivity</h3>
            <p className="mt-4 text-sm text-gray-600">
            Having HR recruitment skills can help you find candidates who are not only skilled but also motivated and aligned with the organization's goals.
            </p>
          </div>
        </div>
      </div>
      
     

      {/* NewsLetter */}
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
        <div className="mb-10 w-full md:w-2/3 lg:mb-0 lg:w-1/2">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Newsletter"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-sm font-bold text-black">Grow . Improve .</p>
          <h2 className="mt-4 text-3xl font-bold text-black">Let's get you hired !</h2>
          <p className="mt-4 text-gray-600">
          We can help you get employed with a good company if you are :<br></br><br></br>

          &#x2022; A Candidate with Excellent communication & interpersonal skills<br></br>
          &#x2022;  A good performer & a good team player<br></br>
          &#x2022;  Hardworking, punctual & professional at work<br></br>
          &#x2022;  Respects company culture & fellow workers<br></br>
          <br></br>
                 Email: <a className="text-rose-500" href="mailto:arun@humaninnovation.in">arun@humaninnovation.in</a>
                 <br></br><br></br>
                Call / Whats App:<b>+91-9717210519 </b>    
          </p>
          
          
          
        </div>
      </div>
    </div>

      {/* footer */}
      <div className="mx-auto mt-12 max-w-7xl border-t">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <span>
            <img decoding="async" src="https://i.ibb.co/njXbDBK/image-removebg-preview-12.png" class="attachment-thumbnail size-thumbnail wp-image-1687 mix-blend-multiply" alt=""  sizes="(max-width: 150px) 100vw, 150px"/>
            </span>
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-rose-500">
                Human Innovation Services | A Crafted Values Company © 2023
              </p>
            </div>
          </div>
          
        </footer>
      </div>
    </div>
  )
}
