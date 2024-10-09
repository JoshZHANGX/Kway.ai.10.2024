import React from 'react'

const About = () => {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Approach</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80" alt="Data visualization" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Realizing Business Value through GenAI</h3>
            <p className="text-gray-600 mb-4">
              At Kway AI, we believe that the true power of Generative AI lies in its ability to unlock hidden value in your business data. Our approach focuses on:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Identifying high-impact areas for GenAI implementation</li>
              <li>Optimizing data infrastructure for AI readiness</li>
              <li>Developing custom GenAI solutions tailored to your needs</li>
              <li>Ensuring ethical and responsible AI practices</li>
            </ul>
            <p className="text-gray-600">
              We guide you through every step, from strategy to implementation, ensuring that your data becomes a powerful utility driving your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About