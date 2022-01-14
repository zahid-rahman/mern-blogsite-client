import {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col, Container } from 'react-bootstrap'
import Banner from '../Banner/Banner'
import bannerImage from '../../images/blog-banner.jpg'
import CategorySidebar from '../categorySidebar/CategorySidebar'
import Posts from '../posts/Posts'
import Title from '../title/Title'
import SiteLayout from '../layout/SiteLayout'
import { getToken } from '../../utils/loginSession'
const API_SERVER_URL = process.env.REACT_APP_SERVER_API

const Home = () => {

    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_SERVER_URL}/post/listV2`,
                headers:{
                    Authorization: getToken()
                }
            });
            setPosts(response.data)
        }
        catch(error) {
            console.error(error)
        }
    }

   




    useEffect(() => {
        getAllPosts();
    }, []);

    const renderHomePageDesign = () => {
        console.log(posts)
        return (
            <>
                <Banner image={bannerImage}></Banner>

                <Title titleName="All Posts" />

                <Container className="mt-2 text-center">
                    <Row className="text-center">
                        <Col xl={2}>
                            <CategorySidebar></CategorySidebar>
                        </Col>
                        <Col xl={10}>
                            <Posts posts={posts}></Posts>
                        </Col>
                    </Row>
                </Container>

                <Title titleName="Our blog" />

                <Container className="text-center">
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={12} >
                            <h3>title 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum est ullam suscipit repellat id? Voluptatum quidem beatae cum optio?
                            </p>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} >
                            <h3>title 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum est ullam suscipit repellat id? Voluptatum quidem beatae cum optio?
                            </p>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} >
                            <h3>title 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum est ullam suscipit repellat id? Voluptatum quidem beatae cum optio?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return (
        <div>
            <SiteLayout siteContent={renderHomePageDesign}></SiteLayout>
        </div>
    )
}

export default Home;