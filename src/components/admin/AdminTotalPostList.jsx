import React from 'react'
import AdminDashboardLayout from './../../components/layout/AdminDashboardLayout'

const AdminTotalPostList = () => {
  const adminTotalPostListPageContent = () => {
    return (
      <div>
        total page list
      </div>
    )
  }
  
  return (
    <AdminDashboardLayout pageContent={adminTotalPostListPageContent} />
  )
}

export default AdminTotalPostList