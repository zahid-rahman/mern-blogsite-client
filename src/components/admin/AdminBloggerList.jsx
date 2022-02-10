import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import { getToken } from '../../utils/loginSession';
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const AdminBloggerList = () => {
    const [ data, setData ] = useState([]);
    const [pending, setPending] = useState(true);
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

    const getBloggerList = async () => {
        const response = await axios({
            method: 'GET',
            url: `${API_SERVER_URL}/user/list`,
            headers:{
                Authorization: getToken().toString()
            }
        });
        setData(response.data)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getBloggerList();
            setPending(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [])

    const adminBloggerListPageContent = () => {
        return (
            <div>
                <DataTable title="Blogger List" columns={columns} data={data} pagination progressPending={pending} highlightOnHover pointerOnHover/>
            </div>
        )
    }
    return (
        <AdminDashboardLayout pageContent={adminBloggerListPageContent} />
    );
};

export default AdminBloggerList;
