import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  required?: boolean;
  options?: string[];
  multiple?: boolean;
}

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  required = true,
  options,
  multiple = false,
}: FormFieldProps) => {
  const baseInputClasses =
    'mt-1 block w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-md transition-all focus:border-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-50 hover:border-red-400';
  const labelClasses = 'block text-sm font-medium text-gray-700 mb-1';

  if (type === 'textarea') {
    return (
      <div className="mb-6">
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputClasses} min-h-[100px] resize-y`}
          rows={3}
        />
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className="mb-6">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name={name}
            checked={value}
            onChange={onChange}
            className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2 cursor-pointer"
          />
          <span className="ml-3 text-sm font-medium text-gray-700">
            {label}
          </span>
        </label>
      </div>
    );
  }

  if (type === 'select' && options) {
    return (
      <div className="mb-6">
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <select
            name={name}
            value={multiple ? (Array.isArray(value) ? value : []) : value || ''}
            onChange={onChange}
            required={required}
            multiple={multiple}
            className={`${baseInputClasses} appearance-none pr-10 ${
              multiple ? 'min-h-[120px]' : ''
            }`}
          >
            {!multiple && <option value="">Select {label}</option>}
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {!multiple && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="mb-6">
      <label className={labelClasses}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={baseInputClasses}
      />
    </div>
  );
};

interface FormProps {
  type: 'service' | 'hospital' | 'department';
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function DynamicForm({ type, onSubmit, onCancel }: FormProps) {
  const [formData, setFormData] = React.useState(() => {
    switch (type) {
      case 'service':
        return {
          name: '',
          description: '',
          primeService: '',
          isPrime: false,
          isActive: true,
        };
      case 'hospital':
        return {
          name: '',
          email: '',
          contact: '',
          description: '',
          departments: '',
          isActive: true,
        };
      case 'department':
        return {
          doctorName: '',
          specialization: '',
          experience: '',
          address: '',
          details: '',
          isConsultant: false,
          isActive: true,
        };
      default:
        return {};
    }
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      departments: formData.departments ? [formData.departments] : [],
    };
    onSubmit(submitData);
  };

  const renderServiceForm = () => (
    <>
      <FormField
        label="Service Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <FormField
        label="Prime Service"
        type="select"
        name="services"
        value={formData.services}
        onChange={handleChange}
        options={['OT Comparison', 'Book Appointment', 'Health Service']}
      />
      {/* <FormField
        label="Prime Service"
        type="checkbox"
        name="isPrime"
        value={formData.isPrime}
        onChange={handleChange}
      /> */}
      <FormField
        label="Active"
        type="checkbox"
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
      />
    </>
  );

  const renderHospitalForm = () => (
    <>
      <FormField
        label="Hospital Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="Contact"
        type="tel"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
      <FormField
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <FormField
        label="Department"
        type="select"
        name="departments"
        value={formData.departments}
        onChange={handleChange}
        options={['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics']}
      />
      <FormField
        label="Active"
        type="checkbox"
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
      />
    </>
  );

  const renderDepartmentForm = () => (
    <>
      <FormField
        label="Doctor Name"
        type="text"
        name="doctorName"
        value={formData.doctorName}
        onChange={handleChange}
      />
      <FormField
        label="Specialization"
        type="select"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
        options={['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics']}
      />
      <FormField
        label="Experience (Years)"
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />
      <FormField
        label="Address"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <FormField
        label="Details"
        type="textarea"
        name="details"
        value={formData.details}
        onChange={handleChange}
      />
      <FormField
        label="Consultant"
        type="checkbox"
        name="isConsultant"
        value={formData.isConsultant}
        onChange={handleChange}
      />
      <FormField
        label="Active"
        type="checkbox"
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
      />
    </>
  );

  return (
    // <form onSubmit={handleSubmit} className="space-y-6">
    //   <div className="grid grid-cols-1 gap-6">
    //     {type === 'service' && renderServiceForm()}
    //     {type === 'hospital' && renderHospitalForm()}
    //     {type === 'department' && renderDepartmentForm()}
    //   </div>

    //   <div className="flex justify-end space-x-3 pt-6 border-t">
    //     <button
    //       type="button"
    //       onClick={onCancel}
    //       className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       type="submit"
    //       className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
    //     >
    //       Save
    //     </button>
    //   </div>
    // </form>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-[80vh] bg-white rounded-lg shadow-md"
    >
      {/* Header (Optional) */}
      {/* <div className="p-4 bg-gray-100 border-b text-lg font-semibold">
        Dynamic Form
      </div> */}

      {/* Scrollable Form Body */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 gap-6">
          {type === 'service' && renderServiceForm()}
          {type === 'hospital' && renderHospitalForm()}
          {type === 'department' && renderDepartmentForm()}
        </div>
      </div>

      {/* Fixed Footer (No Gap at Bottom) */}
      <div className="bg-white border-t p-4 flex justify-end space-x-3 fixed inset-x-0 bottom-0">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}
