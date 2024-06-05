'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'

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

const locations = [
  {
    title: 'New Delhi office',
    timings: 'Mon-Sat 11am to 6pm.',
    address: 'Metro Pillar Number 362, above Buchi gym, Human Innovation Services J 31/32, 3rd floor, Opp, Ramesh Nagar, Delhi, 110015',
  },
  
]



export default function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
     <div className="relative w-full border-b bg-white text-rose-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">
        <div className="inline-flex items-center space-x-2 ">
          
          
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
        <a href="/hrrecruitmenttraining"> <button
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

      <div className="mx-auto max-w-7xl px-3">
        {/* Hero Map */}
        <div className="flex flex-col space-y-4 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          We look forward to a long and fruitful relationship.
          </p>
        </div>
        <div className="w-full space-y-4">
          
          <iframe className="h-96 w-full rounded-xl object-cover" loading="lazy" src="https://maps.google.com/maps?q=Human%20Innovation%20Services&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Human Innovation Services" aria-label="Human Innovation Services"></iframe>
        </div>
        {/* locations */}
        <div className="rounded-lg my-14 bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">Our Office</p>
                <p className="w-full text-lg text-gray-600">Find us at this location.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                    <p className="w-full text-base  text-gray-600">{location.timings}</p>
                    <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
