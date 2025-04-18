import React from 'react';
import { AwardIcon, UsersIcon, BarChartIcon } from 'lucide-react';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551887196-9b7a5c4bcd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="About Lightspeed" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Lightspeed
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the story behind our premium Mexican drinks and the passion
            that drives us to share the authentic flavors of Mexico with the
            world.
          </p>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Lightspeed was founded in 2005 by a group of friends who shared
                a passion for authentic Mexican beverages. What started as a
                small operation in a kitchen in Mexico City has grown into a
                global brand that distributes premium Mexican drinks worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a secret recipe that has been passed down
                through generations. This recipe forms the foundation of our
                signature drink, which has delighted customers across the globe
                with its unique and authentic flavor.
              </p>
              <p className="text-gray-600">
                Today, we remain committed to our founding principles: using
                only the finest ingredients, maintaining the integrity of our
                secret recipe, and sharing the joy of authentic Mexican flavors
                with the world.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1551887373-2d888cbc9b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Our story" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Lightspeed, we are guided by our mission to share the authentic
              flavors of Mexico with the world while maintaining the highest
              standards of quality and service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AwardIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We are committed to using only the finest ingredients and
                maintaining strict quality control to ensure that every bottle
                of our drink meets our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UsersIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in giving back to the communities that have supported
                us. We partner with local organizations to make a positive
                impact in Mexico and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChartIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                While we honor tradition with our secret recipe, we also embrace
                innovation to create new flavors and experiences that delight
                our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team is dedicated to bringing the authentic flavors
              of Mexico to customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Miguel Rodriguez</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="COO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sofia Martinez</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Master Mixer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Carlos Mendez</h3>
              <p className="text-gray-600">Master Mixer</p>
            </div>
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" alt="Marketing Director" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Isabella Lopez</h3>
              <p className="text-gray-600">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
      {/* Global Presence */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Global Presence</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Our premium Mexican drinks are available in stores across the globe,
            bringing the authentic flavors of Mexico to customers worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400">45+</h3>
              <p>Countries</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400">5,000+</h3>
              <p>Retail Stores</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400">12</h3>
              <p>Distribution Centers</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400">3</h3>
              <p>Production Facilities</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400">250+</h3>
              <p>Team Members</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400">1M+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;