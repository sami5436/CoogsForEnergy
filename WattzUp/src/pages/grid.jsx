import React, { useState, useEffect } from 'react';
import { Activity, Battery, AlertTriangle, MapPin, Building, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const GridOperatorDashboard = () => {
  // Rest of the code remains the same, just replacing Lightning with Zap
  const [communityBatteryLevel, setCommunityBatteryLevel] = useState(65);
  const [activeHouseholds, setActiveHouseholds] = useState(128);

  const communityData = [
    { time: '00:00', demand: 250, supply: 280 },
    { time: '04:00', demand: 180, supply: 220 },
    { time: '08:00', demand: 320, supply: 310 },
    { time: '12:00', demand: 410, supply: 480 },
    { time: '16:00', demand: 380, supply: 420 },
    { time: '20:00', demand: 290, supply: 300 },
  ];

  const neighborhoodData = [
    { name: 'North', donating: 45, receiving: 20 },
    { name: 'South', donating: 30, receiving: 35 },
    { name: 'East', donating: 25, receiving: 40 },
    { name: 'West', donating: 50, receiving: 15 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCommunityBatteryLevel(prev => {
        const change = Math.random() * 2 - 1;
        return Math.min(Math.max(prev + change, 0), 100);
      });
      setActiveHouseholds(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        return prev + change;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
<>      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Grid Operator Dashboard</h1>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-400 mr-2" />
            <p className="text-red-700">
              High Load Alert: Section B-7 approaching capacity limit (95%)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Battery className="h-5 w-5" />
              <h3 className="font-semibold">Community Battery</h3>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {communityBatteryLevel.toFixed(1)}%
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-5 w-5" />
              <h3 className="font-semibold">Active Households</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              {activeHouseholds}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5" />
              <h3 className="font-semibold">Grid Health</h3>
            </div>
            <div className="text-3xl font-bold text-emerald-600">
              98%
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5" />
            <h3 className="font-semibold">Emergency Controls</h3>
          </div>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
              Emergency Shutdown
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              Activate Backup Systems
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
              Balance Load Distribution
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Community Energy Demand vs Supply</h3>
            <LineChart width={500} height={300} data={communityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="demand" stroke="#EF4444" name="Demand" />
              <Line type="monotone" dataKey="supply" stroke="#10B981" name="Supply" />
            </LineChart>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Neighborhood Energy Distribution</h3>
            <BarChart width={500} height={300} data={neighborhoodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="donating" fill="#10B981" name="Donating" />
              <Bar dataKey="receiving" fill="#6366F1" name="Receiving" />
            </BarChart>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mt-6">
          <div className="flex items-center gap-2 p-6 border-b">
            <MapPin className="h-5 w-5" />
            <h3 className="font-semibold">Community Grid Map</h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Interactive Grid Map</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridOperatorDashboard;