import React from 'react'

const Footer = () => {
  return (
    <footer className="shadow-xl fixed bottom-0 left-0 w-full py-4 z-50">
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-800 text-white font-medium px-4 py-1 rounded-full">
          Set Point
        </button>
        <button className="bg-blue-800 text-white font-medium px-4 py-1 rounded-full">
          Correction
        </button>
        <button className="bg-blue-800 text-white font-medium px-4 py-1 rounded-full">
          Calibration
        </button>
      </div>
    </footer>
  )
}

export default Footer
