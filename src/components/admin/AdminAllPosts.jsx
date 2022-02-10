import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import { getToken } from '../../utils/loginSession';
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const AdminAllPosts = () => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
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

    const getAllPosts = async () => {
        const response = await axios({
            method: 'GET',
            url: `${API_SERVER_URL}/post/allPosts`,
            headers: {
                Authorization: getToken().toString()
            }
        });
        setData(response.data)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getAllPosts();
            setPending(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const adminAllPostPageContent = () => {
        return (
            <div>
                <DataTable title="All Posts" columns={columns} data={data} pagination progressPending={pending} highlightOnHover pointerOnHover fixedHeader fixedHeaderScrollHeight='700px'/>
            </div>
        )
    }
    return (
        <AdminDashboardLayout pageContent={adminAllPostPageContent} />
    );
};

export default AdminAllPosts;