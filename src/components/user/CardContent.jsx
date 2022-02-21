import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './CardContent.css'

const CardContent = ({ title, content, link }) => {
    return (
        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Card
                style={{ width: '100%' }}
                className="card bg-dark mb-2 text-white"
            >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content != 0 ? <Link to={link} className="content-design">{content}</Link> : <span className="content-design">0</span>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardContent;