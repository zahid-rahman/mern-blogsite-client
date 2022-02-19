import React from 'react'
import AdminDashboardLayout from '../layout/AdminDashboardLayout'

const AdminTotalUserList = () => {
  const adminTotalUserListPageContent = () => {
    return (
      <div>
        admin total user list
      </div>
    )
  }
  return (
    <AdminDashboardLayout pageContent={adminTotalUserListPageContent} />
  )
}

export default AdminTotalUserList