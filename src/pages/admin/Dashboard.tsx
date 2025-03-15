import React, { useState } from 'react';
import { Sidebar } from './components/common/Sidebar.tsx';  // ✅ Fixed: Added correct path
import { Table, StatusCell } from './components/common/Table.tsx';
import { Modal } from './components/common/Modal.tsx';
import { DynamicForm } from './components/forms/Forms';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import type { Service, Hospital, Department } from './types.ts';  // ✅ Ensure types exist

function Dashboard() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'General Checkup',
      description: 'Regular health examination',
      isPrime: true,
      isActive: true,
    },
    {
      id: '2',
      name: 'Dental Care',
      description: 'Complete dental services',
      isPrime: false,
      isActive: true,
    },
  ]);

  const [hospitals, setHospitals] = useState<Hospital[]>([
    {
      id: '1',
      name: 'City General Hospital',
      email: 'contact@citygeneral.com',
      contact: '+1 234 567 8900',
      description: 'Leading healthcare facility',
      departments: ['Cardiology', 'Neurology'],
      isActive: true,
    },
    {
      id: '2',
      name: 'Central Medical Center',
      email: 'info@centralmed.com',
      contact: '+1 234 567 8901',
      description: 'Advanced medical care',
      departments: ['Pediatrics', 'Orthopedics'],
      isActive: true,
    },
  ]);

  const [departments, setDepartments] = useState<Department[]>([
    {
      id: '1',
      doctorName: 'Dr. John Smith',
      address: '123 Medical Center Ave',
      details: 'Head of Cardiology',
      specialization: 'Cardiology',
      experience: 15,
      isConsultant: true,
      isActive: true,
    },
    {
      id: '2',
      doctorName: 'Dr. Sarah Johnson',
      address: '456 Health Parkway',
      details: 'Senior Neurologist',
      specialization: 'Neurology',
      experience: 12,
      isConsultant: true,
      isActive: true,
    },
  ]);

  const handleEdit = (id: string) => {
    // Implement edit functionality
    console.log('Edit item:', id);
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality
    console.log('Delete item:', id);
  };

  const columns = {
    services: [
      { key: 'name', label: 'Name' },
      { key: 'description', label: 'Description' },
      {
        key: 'isPrime',
        label: 'Prime',
        render: (value: boolean) => <StatusCell value={value} />,
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (value: boolean) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_: any, row: any) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    hospitals: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'contact', label: 'Contact' },
      { key: 'description', label: 'Description' },
      {
        key: 'departments',
        label: 'Departments',
        render: (value: string[]) => value.join(', '),
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (value: boolean) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_: any, row: any) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    departments: [
      { key: 'doctorName', label: 'Doctor Name' },
      { key: 'specialization', label: 'Specialization' },
      { key: 'experience', label: 'Experience (Years)' },
      {
        key: 'isConsultant',
        label: 'Consultant',
        render: (value: boolean) => <StatusCell value={value} />,
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (value: boolean) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_: any, row: any) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
  };

  const handleSubmit = (data: any) => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newItem = { ...data, id: newId };

    switch (activeSection) {
      case 'services':
        setServices((prev) => [...prev, newItem]);
        break;
      case 'hospitals':
        setHospitals((prev) => [...prev, newItem]);
        break;
      case 'departments':
        setDepartments((prev) => [...prev, newItem]);
        break;
    }

    setIsModalOpen(false);
  };

  const getData = () => {
    let data;
    switch (activeSection) {
      case 'services':
        data = services;
        break;
      case 'hospitals':
        data = hospitals;
        break;
      case 'departments':
        data = departments;
        break;
      default:
        data = [];
    }

    return data.filter((item) => {
      const searchFields = [
        'name',
        'description',
        'doctorName',
        'specialization',
      ].filter((field) => item[field as keyof typeof item]);
      return searchFields.some((field) =>
        String(item[field as keyof typeof item])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
  };

  if (!activeSection) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar
          activeSection={activeSection || ''}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 ml-72 p-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Otify Admin Panel
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Please select a section from the sidebar to get started
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="flex-1 ml-72 p-8">
        <div className="fixed top-0 left-72 right-0 bg-white shadow-md z-10">
          <div className="px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {activeSection}
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Plus size={20} />
              <span>Add New</span>
            </button>
          </div>
          <div className="px-8 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="mt-36">
          <div className="bg-white rounded-xl shadow-lg overflow-auto max-h-[calc(100vh-180px)]">
            <Table
              columns={columns[activeSection as keyof typeof columns]}
              data={getData()}
            />
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Add New ${activeSection.slice(0, -1)}`}
        >
          <DynamicForm
            type={
              activeSection.slice(0, -1) as
                | 'service'
                | 'hospital'
                | 'department'
            }
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      </main>
    </div>
  );
}

export default Dashboard;