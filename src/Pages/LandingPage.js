import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function LandingPage() {
    return (
        <div className='landingPage   mb-5 pb-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='mt-5 pt-5'>
                            <h1 className='fw-1 text-black '>
                                <b className=''> Create a Blog...</b>
                            </h1>
                            <p className='fs-2'>
                                Discover Stories That Ignite Your Curiosity... <br /> Welcome to a World of Inspiration and Insight! </p>
                        </div>
                        <Link style={{ textDecoration: 'none' }} to={'/login'}> <Button className='btn1'>Get Start <i class="fa-solid fa-angles-right fa-beat"></i></Button></Link>
                    </Col>
                    <Col>
                        <div className='mt-5 p-'>
                            <img src="https://i.postimg.cc/NFW2QYjq/graphic-cartoon-character-blog-vector-37638999-1-removebg-preview.png" alt="" />

                        </div>            </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage