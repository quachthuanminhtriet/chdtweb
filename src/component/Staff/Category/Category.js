import { Link } from 'react-router-dom';
import './Category.css'

const Category = () => {
    return (
        <div className="app-container">
            <div className="sidebar">
                <div className="logo-container">
                    <h2 className="logo">Logo</h2>
                </div>
                <nav className="sidebar-menu">
                    <ul>
                        <Link to='/' className='sidebar-menu'><li className="menu-item">Category</li></Link>
                        <Link to='/Product' className='sidebar-menu'><li className="menu-item">Product</li></Link>
                        <Link to='/Cart' className='sidebar-menu'><li className="menu-item">Cart</li></Link>
                        <Link to='/Stats' className='sidebar-menu'><li className="menu-item">Stats</li></Link>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h2 className="content-title">Category</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th className="table-header">STT</th>
                            <th className="table-header">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td className="table-cell">1</td>
                            <td className="table-cell">Mobile</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell">2</td>
                            <td className="table-cell">TV</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell">3</td>
                            <td className="table-cell">Laptop</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell">4</td>
                            <td className="table-cell">HeadPhon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Category;