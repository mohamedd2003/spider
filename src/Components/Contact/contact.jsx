import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tbi8mb8", "template_4x3hcez", form.current, {
        publicKey: 'sjjHZ5aS8nLByNaSP',
      })
      .then(
        () => {
          toast.success('Message Sent Successfully', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        },
        (error) => {
          toast.error('There was an Error Sending Message', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
      );
  };

  return (
    <section id="contact" className="py-10 w-[80%] mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap">
        {/* Left Title */}
        <div className="w-full md:w-1/2 mt-2">
          <div className="flex items-center justify-start lg:mt-6">
            <h2
              id="About"
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-center text-5xl md:text-6xl lg:text-8xl raleway text-main"
            >
              Let's get <br /> in touch
            </h2>
          </div>
        </div>

        {/* Right Form */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full md:w-1/2 mt-2"
        >
          <form onSubmit={sendEmail} ref={form} className="max-w-md mx-auto">
            {/* Name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            {/* Phone + Company */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="company"
                  className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Spider)
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-md text-main bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            {/* Message */}
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-md text-gray-500 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#125e51] peer mb-3"
              placeholder="Write your Message here..."
              required
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="text-white bg-[#125e51] hover:bg-[#0f4d43] focus:ring-4 focus:outline-none focus:ring-[#125e51]/50 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message <i className="fa-solid fa-paper-plane ms-1"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
