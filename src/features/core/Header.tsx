import { Row, Col } from 'react-bootstrap'
import style from './style.module.css'

const Header = (): JSX.Element => {
    return (
        <header className={style.header}>
            <Row className='justify-content-md-center'>
                <Col md={8}>
                    <h1 className={style.title}>FK-kulu</h1>
                </Col>
            </Row>
        </header>
    )
}

export default Header