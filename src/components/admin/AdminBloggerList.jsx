import React from 'react';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import CustomDataTable from '../dataTable/CustomDataTable';

const AdminBloggerList = () => {
    const columns = [
        {
            name: 'Email Address',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true,
        },
        {
            name: 'NID',
            selector: row => row.nid,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => {
                if(row.status == 'inactive')
                    return <small className="badge bg-danger">inactive</small>
                else
                    return <small className="badge bg-success">active</small>
 
            },
            sortable: true,
        },
        {
            name: 'Action',
            selector: () => {
                return (
                    <div>
                        <a className="btn btn-primary" href="#">edit</a>
                        <a className="btn btn-danger m-2" href="#">Delete</a>
                    </div>
                )
            },
            sortable: false
        }
        
    ];

    const adminBloggerListPageContent = () => {
        const apiRequestInfo = {};
        apiRequestInfo['method'] = 'get';
        apiRequestInfo['url'] = `/user/list`;
        return (
            <CustomDataTable title="Blogger List" columns={columns} apiRequestInfo={apiRequestInfo}/>
        )
    }

    return (
        <AdminDashboardLayout pageContent={adminBloggerListPageContent} />
    );
};

export default AdminBloggerList;
