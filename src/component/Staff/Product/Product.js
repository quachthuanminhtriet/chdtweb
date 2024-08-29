import { Link } from 'react-router-dom';
import { Col, Row, Table } from 'react-bootstrap';

const Product = () => {
    return (
        <Row>
            <Col xs={3} className="sidebar">
                <div className="logo">Logo</div>
                <ul className="sidebar-menu">
                    <Link to='/' className='sidebar-menu'><li className="menu-item">Category</li></Link>
                    <Link to='/Product' className='sidebar-menu'><li className="menu-item">Product</li></Link>
                    <Link to='/Cart' className='sidebar-menu'><li className="menu-item">Cart</li></Link>
                    <Link to='/Stats' className='sidebar-menu'><li className="menu-item">Stats</li></Link>
                </ul>
            </Col>
            <Col xs={9} className="main-content">
                <h2 className="content-title">Product Detail</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Image 1</td>
                            <td>Samsung Galaxy S24 Plus 12GB 256 GB</td>
                            <td>29.990.000VNĐ</td>
                            <td>136</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Image 1</td>
                            <td>Samsung Galaxy S24 Plus 12GB 256 GB</td>
                            <td>29.990.000VNĐ</td>
                            <td>136</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Image 1</td>
                            <td>Samsung Galaxy S24 Plus 12GB 256 GB</td>
                            <td>29.990.000VNĐ</td>
                            <td>136</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Image 1</td>
                            <td>Samsung Galaxy S24 Plus 12GB 256 GB</td>
                            <td>29.990.000VNĐ</td>
                            <td>136</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Image 1</td>
                            <td>Samsung Galaxy S24 Plus 12GB 256 GB</td>
                            <td>29.990.000VNĐ</td>
                            <td>136</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default Product;