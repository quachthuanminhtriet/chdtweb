import { Col, Row, Table } from 'react-bootstrap';
import './Stats.css'
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

const Stats = () => {
    const data = {
        labels: ['Headphone', 'Tivi', 'Mobile', 'Laptop'],
        datasets: [
            {
                label: "Products",
                data: [3.5, 6.0, 2.0, 4.5, 5.0],
                backgroundColor: ['yellow', 'blue', 'red', 'green', 'orange'],
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

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
                <h2 className="content-title">Stats Detail</h2>
                <Bar data={data} options={options} />
                <div className="actions">
                    <button className="btn btn-primary">Import PDF</button>
                    <button className="btn btn-primary">Send Mail</button>
                </div>
            </Col>
        </Row>
    );
}

export default Stats;