import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PrivateRouter from './components/PrivateRouter'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import Login from './pages/auth/Login'
import ListProduct from './pages/public/products/ListProduct'
import ProductDetail from './pages/public/products/ProductDetail'
import AdminIndex from './pages/admin/AdminIndex'
import Account from './pages/admin/Account'
import Product from './pages/admin/Product'
import Order from './pages/admin/Order'

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* Public routes with Navbar */}
            <Route path="/*" element={
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<ListProduct />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                    </Routes>
                </>
            } />

            {/* Protected Admin Routes with AdminNavbar */}
            <Route path="/admin" element={<PrivateRouter />}>
                <Route index element={<AdminIndex />} />
                <Route path="account" element={<Account />} />
                <Route path="product" element={<Product />} />
                <Route path="order" element={<Order />} />
            </Route>
        </Routes>
    )
}