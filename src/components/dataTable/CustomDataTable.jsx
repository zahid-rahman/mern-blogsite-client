import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { getToken } from '../../utils/loginSession';
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const CustomDataTable = ({ apiRequestInfo, columns, title, isLoading = true }) => {
    const [pending, setPending] = useState(true);
    const [apiData, setApiData] = useState([]);

    const getData = async () => {
        const apiRequestConfig = {};
        apiRequestConfig['method'] = apiRequestInfo.method;
        apiRequestConfig['url'] = `${API_SERVER_URL}${apiRequestInfo.url}`
        apiRequestConfig['headers'] = {
            Authorization: getToken().toString()
        };
        if (apiRequestInfo.requestPayload) {
            apiRequestConfig['data'] = apiRequestInfo.requestPayload;
        }
        try {
            const response = await axios(apiRequestConfig);
            setApiData(response.data);
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (isLoading === true) {
            const timeout = setTimeout(() => {
                getData();
                setPending(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
        else {
            getData();
            setPending(false);
        }
    }, []);

    return (
        <DataTable
            columns={columns}
            data={apiData}
            title={title}
            progressPending={pending}
            pagination
            highlightOnHover
            pointerOnHover
            fixedHeader
            fixedHeaderScrollHeight='700px'
        />
    )
}

export default CustomDataTable;