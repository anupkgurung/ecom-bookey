import { Link } from "react-router-dom";
import logo from "../../image/logo.jpg";
import { useWishlist, useCart } from "../../context";
import "./navbar.css";

export const Navbar = () =>{
    const { wishlistInitialState : {wishlist} } = useWishlist();
    const { intialState : {cartList} } = useCart();

    return (

        <div className="header-bar">
            <div className="topbar">
                <div>
                    <Link className="link-style-none" to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="search-bar-head">
                    <input type="text" className="search input-width" placeholder="Search" />
                </div>
                <div>
                    <ul>
                        <li className="list-inline">
                            <span className="material-icons pl-1">account_circle</span>
                        </li>
                        <li className="list-inline">
                            <Link className="link-style-none relative" to="/wishlist">
                                <span className="material-icons pl-1">favorite_border</span>
                                <span className="badge icon-badge wishlist-badge">{wishlist && wishlist.length}</span>
                            </Link>
                        </li>
                        <li className="list-inline">
                            <Link className="link-style-none relative" to="/cart">
                                <span className="material-icons pl-1">shopping_cart</span>
                                <span className="badge icon-badge">{cartList && cartList.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="authentication">
                    <button className="btn btn-primary hide-default">Login</button>
                    <button className="btn btn-secondary">Logout</button>
                </div>
            </div>
            <div className="search-bar-nav">
                <input type="text" className="search input-width" placeholder="Search" />
            </div>
            <div id="navigation" className="navigation-bar">
                <nav className="nav nav-box-shadow">
                    <ul className="ml-1 navbar-list">
                        <li><Link className="link-style-none" tabIndex="1" to="/products">Books</Link></li>
                        <li><Link className="link-style-none" tabIndex="1" to="/products">New Arrivals</Link></li>
                        <li><Link className="link-style-none" tabIndex="1" to="/products">Best Seller</Link></li>
                        <li><Link className="link-style-none" tabIndex="1" to="/products">Pre-Order</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}