import React from 'react';
import {Container, Row, Card, Col } from 'react-bootstrap';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import CardContent from '../user/CardContent';

const AdminDashboard = () => {
    const demoCardContent = () => '0';
    const renderAdminDashboardLayout = () => {
        return (
            <Container className="p-2">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Card className="text-center">
                            <Card.Header>
                                <b>Dashboard</b>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <CardContent title="total user" content={demoCardContent} />
                                    <CardContent title="total user" content={demoCardContent} />
                                    <CardContent title="total user" content={demoCardContent} />

                                    <CardContent title="total user" content={demoCardContent} />
                                    <CardContent title="total user" content={demoCardContent} />
                                    <CardContent title="total user" content={demoCardContent} />

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <AdminDashboardLayout pageContent={renderAdminDashboardLayout}/>
    );
}

export default AdminDashboard;