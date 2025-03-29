import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Calendar, Users, BookOpen, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (error: any) {
      console.error('Error logging out:', error.message);
      // Still navigate to login even if there's an error
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Routine Management
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/dashboard"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/teachers"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Teachers
                </Link>
                <Link
                  to="/dashboard/programs"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Programs
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/teachers" element={<div>Teachers Management</div>} />
                <Route path="/programs" element={<div>Programs Management</div>} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardHome() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <h3 className="ml-3 text-xl font-medium text-gray-900">Teachers</h3>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Manage teacher profiles and availability
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h3 className="ml-3 text-xl font-medium text-gray-900">Programs</h3>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Configure programs, branches, and semesters
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <h3 className="ml-3 text-xl font-medium text-gray-900">Routines</h3>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Create and manage class schedules
          </p>
        </div>
      </div>
    </div>
  );
}