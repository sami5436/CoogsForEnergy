import { useState } from 'react'
import CustomerDashboard from './pages/customer'
import GridOperatorDashboard from './pages/grid'
import './App.css'

function App() {
  const [currentDashboard, setCurrentDashboard] = useState('customer') // Default to customer dashboard

  return (
<>
      {/* Navigation buttons */}
      <div className="p-4 flex gap-4 justify-center">
        <button 
          className={`px-6 py-2 rounded-lg transition-colors cursor-pointer ${
            currentDashboard === 'customer' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setCurrentDashboard('customer')}
        >
          Customer Dashboard
        </button>
        <button 
          className={`px-6 py-2 rounded-lg transition-colors cursor-pointer ${
            currentDashboard === 'grid' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setCurrentDashboard('grid')}
        >
          Grid Operator Dashboard
        </button>
      </div>

      {/* Dashboard display */}
      <div className="container mx-auto">
        {currentDashboard === 'customer' ? <CustomerDashboard /> : <GridOperatorDashboard />}
      </div>
      </>
  )
}

export default App