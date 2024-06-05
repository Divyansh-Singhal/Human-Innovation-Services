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

export default function Hrrecruitmenttraining() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <div className="relative w-full border-b bg-white text-rose-500	">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          
          
          <span className="font-bold nav-heading text-xl">Human Innovation Services</span>
        </div>
        <div className="hidden lg:block text-rose-600">
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
        
        <div className="lg:hidden text-rose-600">
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
                <div className="mt-6 text-rose-600" >
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
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Become a Professional HR Recruiter
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
          Human Innovation Services is pleased to announce its HR Recruitment Training Program.<br></br>
Our HR Recruitment Training Program for Freshers is designed to equip individuals who are new to the field of recruitment with the essential skills and knowledge to kickstart their careers.
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Join Our Program</p>
                <p className="mt-4 text-lg text-rose-500">
                Human Innovation Services  | A Crafted Values Company
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      City
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Your City"
                      cols={3}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            />
          </div>
        </div>
      </div>
      
     
      <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Program Overview</h2>

      <p className="mt-4  text-gray-500 sm:text-l">
      Our HR Recruitment Training Program for Freshers is designed to provide a comprehensive foundation for individuals who are new to the field of HR recruitment. This program is tailored to equip freshers with the essential skills and knowledge necessary to succeed in the dynamic and competitive world of talent acquisition.
<br></br>
<br />
In conclusion, HR recruitment is a highly rewarding career choice that offers several career growth and development opportunities. With the right skills, attitude, and training, a fresher can succeed in this profession and positively impact individuals and organizations.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Courses</dt>

          <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">5</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Trainers</dt>

          <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">15+</dd>
        </div>
       
        
        <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Enrollments</dt>

          <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">150+</dd>
        </div>
      </dl>
    </div>
  </div>
</section><br /><br /><br /><br />
{/* About Us*/}
<section>
      <div className="px-2 lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              About Us.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            We are a team of experienced HR professionals who are passionate about sharing our knowledge and expertise with others in the industry. With years of experience in recruitment and talent acquisition, we understand the challenges that come with finding and hiring top talent, and we’re committed to providing our clients with the skills and knowledge needed to excel in their careers.
<br></br> <br />
Our training programs are designed to be comprehensive and hands-on. We cover everything from sourcing and attracting candidates to conducting interviews and making job offers. We also teach effective recruitment strategies, how to stay up-to-date with the latest trends and technologies in the field, and best practices for managing the hiring process.
            </p>

         
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://i0.wp.com/humaninnovation.in/wp-content/uploads/2023/05/amy-hirschi-K0c8ko3e6AA-unsplash.jpg?resize=1536%2C1024&ssl=1"
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
    <br /><br /><br /><br /><br /><br /><br />
{/* Program highlights */}
<div className="px-2 py-2 md:px-6 md:py-10 text-center bg-gray-100">
<h2 className="text-3xl my-10 mb-16 font-bold text-gray-900 sm:text-4xl ">Program highlights</h2>
      
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        
          <div className="space-y-3 bg-rose-100 rounded-lg">
            
            <h1 className="text-xl my-4 font-semibold capitalize text-black">Recruitment Planning and Strategy</h1>
            
          </div>
          <div className="space-y-3 bg-rose-100 rounded-lg">
            
            <h1 className="text-xl my-4 font-semibold capitalize text-black">Sourcing and Attracting Candidates</h1>

          </div>
          <div className="space-y-3 bg-rose-100 rounded-lg">
            
            <h1 className="text-xl my-4 font-semibold capitalize text-black">Interviewing and Selection Techniques</h1>
            
            
          </div>
          <div className="space-y-3 bg-rose-100 rounded-lg">
            
            <h1 className="text-xl my-4 font-semibold capitalize text-black">Negotiating Offers and Onboarding</h1>
            
            
          </div>
          <div className="space-y-3 bg-rose-100 rounded-lg">
            
            <h1 className="text-xl my-4 font-semibold capitalize text-black">Diversity and Inclusion in Recruitment</h1>
            
            
          </div>
          <div className="space-y-3 bg-rose-100 rounded-lg">
            
            <h1 className="text-xl my-4 font-semibold capitalize text-black">100% Career Success Guarantee</h1>
            
            
          </div>
      </div>
      <br /><br />
    </div><br />
    {/* more*/}
    <section className='ml-10'>
  <div className="ml-10 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg  lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        

        <p className="mt-4 text-gray-600">
        Whether you have just graduated or are transitioning into HR from a different field, this program will provide you with a solid foundation in recruitment practices and techniques.
<br /><br />
&#x2022; Recruitment Planning and Strategy<br />
&#x2022; Sourcing and Attracting Candidates<br />
&#x2022; Interviewing and Selection Techniques<br />
&#x2022; Negotiating Offers & Onboarding<br />
&#x2022; Diversity & Inclusion in Recruitment
        </p>

        <a
          href="tel:+91 8864906480"
          className="mt-8 inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
        >
          +91 8864906480
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3 text-rose-500">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
</svg>

          </span>

          <h2 className="mt-2 font-bold">Online & Offline Classes</h2>

         
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href=""
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3 text-rose-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>


          </span>

          <h2 className="mt-2 font-bold">Course Duration: 3 Months</h2>

          
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href=""
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3 text-rose-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

          </span>

          <h2 className="mt-2 font-bold">Course Price: 30,000 INR</h2>

          </a>
      </div>
    </div>
  </div>
</section><br /><br /><br />
 {/* footer */}
 <section className="relative overflow-hidden bg-white py-8 border-t">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <a href="">
                <div className="inline-flex items-center">
                  
                  <span className="ml-4 text-lg font-bold text-rose-500">Human Innovation Services | A Crafted Values Company © 2023</span>
                </div>
              </a>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
     
     
