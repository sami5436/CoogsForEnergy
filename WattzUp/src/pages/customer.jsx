import React, { useState, useEffect } from 'react';
import { Battery, Sun, Zap, AlertTriangle, Gift } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

const CustomerDashboard = () => {
  const [batteryLevel, setBatteryLevel] = useState(75);
  const [isDonating, setIsDonating] = useState(false);
  const [donationAmount, setDonationAmount] = useState(20);

  // Mock usage data
  const usageData = [
    { time: '00:00', consumption: 2.5, production: 0 },
    { time: '04:00', consumption: 1.8, production: 0 },
    { time: '08:00', consumption: 3.2, production: 2.1 },
    { time: '12:00', consumption: 4.1, production: 4.8 },
    { time: '16:00', consumption: 3.8, production: 3.2 },
    { time: '20:00', consumption: 2.9, production: 0.5 },
  ];

  const energySourceData = [
    { name: 'Solar', value: 45 },
    { name: 'Grid', value: 30 },
    { name: 'Battery', value: 25 },
  ];

  const COLORS = ['#10B981', '#6366F1', '#F59E0B'];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => {
        const change = Math.random() * 2 - 1;
        return Math.min(Math.max(prev + change, 0), 100);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
<>  <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Energy Dashboard</h1>
        
        {/* Alerts Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
            <p className="text-yellow-700">
              Weather Alert: Thunderstorm expected tonight. Battery charging recommended.
            </p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Battery className="h-5 w-5" />
              <h3 className="font-semibold">Battery Level</h3>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {batteryLevel.toFixed(1)}%
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-5 w-5" />
              <h3 className="font-semibold">Solar Production</h3>
            </div>
            <div className="text-3xl font-bold text-amber-500">
              4.8 kW
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5" />
              <h3 className="font-semibold">Current Usage</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              3.2 kW
            </div>
          </div>
        </div>

        {/* Energy Donation Controls */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="h-5 w-5" />
            <h3 className="font-semibold">Energy Donation Controls</h3>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${
                isDonating ? 'bg-green-500' : 'bg-gray-300'
              }`}
              onClick={() => setIsDonating(!isDonating)}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  isDonating ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span>Enable Energy Donation</span>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Donation Amount: {donationAmount}kWh</label>
            <input
              type="range"
              min="0"
              max="50"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Energy Usage vs Production</h3>
            <LineChart width={500} height={300} data={usageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="consumption" stroke="#6366F1" name="Consumption" />
              <Line type="monotone" dataKey="production" stroke="#10B981" name="Production" />
            </LineChart>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Energy Sources</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={energySourceData}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {energySourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
      </>    
  );
};

export default CustomerDashboard;