import React from 'react'
import { Brain } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-8 w-8 text-blue-400 mr-2" />
            <span className="font-bold text-xl">Kway AI</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Kway AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer