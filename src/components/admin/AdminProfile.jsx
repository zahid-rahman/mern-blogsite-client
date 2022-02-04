import React from 'react'
import { useSelector } from 'react-redux';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import profileImages from './../../images/profile_images.jpeg'
import './AdminProfile.css'

const AdminProfile = () => {
    const loggedUserDetails = useSelector(state => state.loggedUserDetails);

    const renderAdminProfileContent = () => {
        return (
            <Container className="p-2">
                <Row>
                    <Col xl={{span:6, offset:3}} lg={{span:6, offset:3}} md={{span:6, offset:3}} sm={{span:6, offset:3}} xs={{span:6, offset:3}}>
                        <Card body>
                            <Image src={profileImages} rounded fluid className="profile_image"></Image>
                            <h3 className="profile_name">{loggedUserDetails.username}</h3>
                            <p className="text-center">{loggedUserDetails.email}</p>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <AdminDashboardLayout pageContent={renderAdminProfileContent} />
    )
}

export default AdminProfile;