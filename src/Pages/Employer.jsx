
'use client'

import React from 'react'
import { Menu, X, Check, ArrowRight, ArrowLeft } from 'lucide-react'

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

export default function Employer() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <div className="relative w-full border-b  bg-white text-rose-500	">
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
                <a href="/hrrecruitmenttraining"> <button
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
      <div className="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center">
        <div>
          <div>
            <p className="text-sm font-semibold text-black"><i>Together, let’s build a great Team!</i></p>
            <h1 className="mt-3 text-xl font-semibold text-gray-800 md:text-xl">
            "Care of customers by employees and care of employees by company leads to a healthy business.""
            </h1>
            <p className="mt-4 text-gray-500">
            We Hire for all Positions and Profiles: IT & Non IT : Junior, Mid Level & Senior Level across Industries @ Pan India.
            </p>
            
          </div>
          <div className="mt-10 space-y-6">
            <div>
              
              <p className="mt-2 text-m text-gray-500">We can provide you with Talent Acquisition services only if your company has:<br></br><br></br>

              &#x2022; Good Work Culture<br></br>
              &#x2022;  No Hire & Fire<br></br>
              &#x2022;  Salaries & Payments on Time<br></br></p>
            </div>
            <div>
              <a
                href="mailto:arun@humaninnovation.in"
                className="hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black"
              >
                <span>Email :<span className="text-rose-500"> arun@humaninnovation.in</span> </span>
                
              </a>
              <p className="mt-2 text-sm text-gray-500">Call / Whats App: +91-9717210519</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="404"
            className="h-full ml-10 w-full rounded-md object-cover"
          />
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
