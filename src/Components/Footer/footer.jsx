import React from 'react'
import logo from '../../assets/logo.png' // Adjust the path as necessary
import Maps from '../Maps/Maps'

export default function Footer() {
  return (
    <>



      <footer className=" lg:grid lg:grid-cols-5 ">
        <div className="relative block h-[300px] lg:col-span-2 lg:h-full">
          <Maps />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            <div>
              <p>
                <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Call us
                </span>

                <a
                  href="tel:+201095010007"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
                >
                  +20-109-501-0007
                </a>

              </p>

              <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>Sunday to Thursday: 9am - 6pm</li>
                {/* <li>Weekend: 10am - 3pm</li> */}
              </ul>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="mailto:sspidermarketing@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Gmail</span>
                    <i class="fa-solid fa-envelope  fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/16c9k5SZ9n/?mibextid=wwXIfr"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>


                <li>
                  <a
                    href="https://www.instagram.com/spideragency_/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>




              </ul>
            </div>

            <div className="flex flex wrap content-between space-x-6" >
              <div className="col-5">
                <div className='p-1'>
                  <a href='#services' className="font-medium text-gray-900 dark:text-white">Services</a>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                        Branding

                      </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">

                        Digital Marketing

                      </a>
                    </li>


                    <li>
                      <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                        Web Development

                      </a>
                    </li>
                  </ul>
                </div>

              </div>
              <div className='p-1'>
                <div className='col-5 '>
                  <p className="font-medium text-gray-900 dark:text-white">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="#About" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                        About
                      </a>
                    </li>

                    <li>
                      <a href="#services" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                        services
                      </a>
                    </li>

                    <li>
                      <a href="#clients" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                        Clients
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <p href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Terms & Conditions
                  </p>
                </li>

                <li>
                  <p href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Privacy Policy
                  </p>
                </li>

                <li>
                  <p href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Cookies
                  </p>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
                &copy; 2018 Spider Agency All rights reserved.

              </p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
