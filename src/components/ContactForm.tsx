import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const ContactForm = () => {
  return <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or want to place a bulk order? Get
            in touch with our team and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your email" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Subject" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-200 w-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    123 Beverage Blvd
                    <br />
                    Mexico City, Mexico
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-gray-600">info@lightspeed.com</p>
                  <p className="text-gray-600">sales@lightspeed.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p className="text-gray-600">Saturday: 10am - 2pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;