import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Header from './Header'

type LayoutProps = {
    children: JSX.Element;
}

const Layout = (props: LayoutProps): JSX.Element => {
    return (
        <Container fluid='md'>
            <Col >
                <Header />
                heimoi
                {props.children}
            </Col>
        </Container>
    )
}

export default Layout