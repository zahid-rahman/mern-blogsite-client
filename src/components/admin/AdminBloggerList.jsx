import React from 'react';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';

const AdminBloggerList = () => {
    const adminBloggerListPageContent = () => {
        return (
            <div>
                <h1>Admin Blogger List</h1>
            </div>
        )
    }
    return (
        <AdminDashboardLayout pageContent={adminBloggerListPageContent}/>
    );
};

export default AdminBloggerList;
