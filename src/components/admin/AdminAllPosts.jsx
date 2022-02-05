import React from 'react';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';

const AdminAllPosts = () => {
    const adminAllPostPageContent = () => {
        return (
            <div>
                <h1>All User Posts</h1>
            </div>
        )
    }
    return (
        <AdminDashboardLayout pageContent={adminAllPostPageContent} />
    );
};

export default AdminAllPosts;