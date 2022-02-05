import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Card, Col } from 'react-bootstrap';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import CardContent from '../user/CardContent';
import PageTitle from './../../components/head-title/PageTitle';
import { getToken } from '../../utils/loginSession';
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const AdminDashboard = () => {

    const [postRelatedCounts, setPostRelatedCounts] = useState({
        activePostCount: 0,
        pendingPostCount: 0
    });

    const [userRelatedCounts, setUserRelatedCounts] = useState({
        activeUserCount: 0,
        inactiveUserCount: 0
    })

    const getPostRelatedCounts = async () => {
        try{
            const activePostCountResponse = await axios({
                method: 'GET',
                url: `${API_SERVER_URL}/post/activePostCount`,
                headers:{
                    Authorization: getToken().toString()
                }
            });
            const activePostCount = activePostCountResponse.data;

            const pendingPostCountResponse = await axios({
                method: 'GET',
                url: `${API_SERVER_URL}/post/pendingPostCount`,
                headers:{
                    Authorization: getToken().toString()
                }
            });
            const pendingPostCount = pendingPostCountResponse.data;

            setPostRelatedCounts((previousStates) => {
                return {
                    ...previousStates,
                    activePostCount,
                    pendingPostCount
                }
            });
        }
        catch(error) {
            console.error(error);
        }
    }

    const getUserRelatedCounts = async () => {
        try{
            const activeUserCountResponse = await axios({
                method: 'GET',
                url: `${API_SERVER_URL}/user/activeUserCount`,
                headers:{
                    Authorization: getToken().toString()
                }
            });
            const activeUserCount = activeUserCountResponse.data;


            const inactiveUserCountResponse = await axios({
                method: 'GET',
                url: `${API_SERVER_URL}/user/inactiveUserCount`,
                headers:{
                    Authorization: getToken().toString()
                }
            });

            const inactiveUserCount = inactiveUserCountResponse.data;
            setUserRelatedCounts((previousStates) => {
                return {
                    ...previousStates,
                    activeUserCount,
                    inactiveUserCount
                }
            })
        }
        catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPostRelatedCounts();
        getUserRelatedCounts();
        console.log(postRelatedCounts.pendingPostCount);
    }, [])

    const renderAdminDashboardLayout = () => {
        return (
            <Container className="p-2">
                <PageTitle pageTitle="Dashboard" />
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Card className="text-center">
                            <Card.Header>
                                <b>Dashboard</b>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <CardContent title="total user(active)" content={userRelatedCounts.activeUserCount} />
                                    <CardContent title="total user(inactive)" content={userRelatedCounts.inactiveUserCount} />
                                    <CardContent title="total post(active)" content={postRelatedCounts.activePostCount} />

                                    <CardContent title="total post(pending)" content={postRelatedCounts.pendingPostCount} />

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <AdminDashboardLayout pageContent={renderAdminDashboardLayout} />
    );
}

export default AdminDashboard;