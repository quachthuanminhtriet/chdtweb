import { Col, Row, Table } from 'react-bootstrap';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Row>
            <Col xs={3} className="sidebar">
                <div className="logo">Logo</div>
                <ul className="sidebar-menu">
                    <Link to='/'><li className="menu-item">Category</li></Link>
                    <Link to='/Product'><li className="menu-item">Product</li></Link>
                    <Link to='/Cart'><li className="menu-item">Cart</li></Link>
                    <Link to='/Stats'><li className="menu-item">Stats</li></Link>
                </ul>
            </Col>
            <Col xs={9} className="main-content">
                <h2 className="content-title">Cart Detail</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Down Sales Dim Value</th>
                            <th>BTT</th>
                            <th>Tier</th>
                            <th>Total</th>
                            <th>% to Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Down Sales Dim Value</td>
                            <td>Metric 1</td>
                            <td>$12,345</td>
                            <td>Tier 1</td>
                            <td>$12,345</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>Down Sales Dim Value</td>
                            <td>Metric 2</td>
                            <td>$6,789</td>
                            <td>Tier 2</td>
                            <td>$6,789</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <td>Down Sales Dim Value</td>
                            <td>Metric 3</td>
                            <td>$3,456</td>
                            <td>Tier 3</td>
                            <td>$3,456</td>
                            <td>15%</td>
                        </tr>
                        <tr>
                            <td>Down Sales Dim Value</td>
                            <td>Metric 4</td>
                            <td>$1,234</td>
                            <td>Tier 4</td>
                            <td>$1,234</td>
                            <td>10%</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default Cart;