import React from 'react';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import CustomDataTable from '../dataTable/CustomDataTable';

const AdminAllPosts = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Blogger Name',
            selector: row => row.user.username,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => {
                if (row.status == 'pending')
                    return <small className="badge bg-danger">pending</small>
                else
                    return <small className="badge bg-success">online</small>

            },
            sortable: true,
        },
        {
            name: 'Action',
            selector: () => {
                return (
                    <div>
                        <a className="btn btn-dark" href="#">view</a>
                        <a className="btn btn-primary m-2" href="#">edit</a>
                        <a className="btn btn-danger m-2" href="#">Delete</a>
                    </div>
                )
            },
            sortable: false
        }
    ];

    const adminAllPostPageContent = () => {
        const apiRequestInfo = {};
        apiRequestInfo['method'] = 'get';
        apiRequestInfo['url'] = `/post/allPosts`;
        return (
            <CustomDataTable apiRequestInfo={apiRequestInfo} columns={columns} title="All Posts" />
        )
    }
    return (
        <AdminDashboardLayout pageContent={adminAllPostPageContent} />
    );
};

export default AdminAllPosts;