import React from 'react'
import { Cpu, LineChart, Lightbulb, Database } from 'lucide-react'

const Services = () => {
  const services = [
    { icon: <Cpu className="h-12 w-12 text-blue-600" />, title: 'GenAI Strategy Consulting', description: 'Develop a tailored Generative AI roadmap aligned with your business goals' },
    { icon: <LineChart className="h-12 w-12 text-blue-600" />, title: 'Data-Driven Insights', description: 'Transform your business data into actionable insights for growth' },
    { icon: <Lightbulb className="h-12 w-12 text-blue-600" />, title: 'AI Implementation', description: 'Guide you through the process of integrating GenAI solutions into your operations' },
    { icon: <Database className="h-12 w-12 text-blue-600" />, title: 'Data as Business Utility', description: 'Optimize your data infrastructure to become a powerful business asset' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services