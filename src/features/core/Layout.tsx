import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Header from './Header'

type LayoutProps = {
    children: JSX.Element;
}

const Layout = (props: LayoutProps): JSX.Element => {
    return (
        <Container fluid className='p-0'>
            <Header />
            <Row className='justify-content-md-center' >
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout