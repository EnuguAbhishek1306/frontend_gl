import React from 'react'

export const Pagination = ({ currentPage, totalPages, setPage }) => {
  return (
    <div className="flex justify-center gap-2 mt-4 mb-8">
    <button
      onClick={() => setPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      Previous
    </button>
    <span className="px-4 py-2">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
  )
}
