import React from 'react'
import { Trash2, Edit } from 'lucide-react';
const DataTable = ({ data, type, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {type === 'job' && (
              <>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
              </>
            )}
            {type === 'internship' && (
              <>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
              </>
            )}
            {type === 'certification' && (
              <>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>

              </>
            )}
            
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item._id}>
              {type === 'job' && (
                <>
                  <td className="px-6 py-4">{item.companyName}</td>
                  <td className="px-6 py-4">{item.role}</td>
                  <td className="px-6 py-4">{item.salary}</td>
                  <td className="px-6 py-4">{new Date(item.deadline).toLocaleDateString()}</td>
                </>
              )}
              {type === 'internship' && (
                <>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.jobRole}</td>
                  <td className="px-6 py-4">{new Date(item.lastDateToApply).toLocaleDateString()}</td>
                </>
              )}
              {type === 'certification' && (
                <>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.platform}</td>
                </>
              )}
              <td className="px-6 py-4 flex space-x-2">
                <button onClick={() => onEdit(item)} className="text-blue-500 hover:text-blue-700">
                  <Edit size={20} />
                </button>
                <button onClick={() => onDelete(item._id)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable