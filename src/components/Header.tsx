import React from 'react'
import { Brain } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="h-8 w-8 text-blue-600 mr-2" />
          <span className="font-bold text-xl text-gray-800">Kway AI</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#approach" className="text-gray-600 hover:text-blue-600">Our Approach</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header