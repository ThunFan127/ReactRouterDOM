# React Router DOM Learning Project

Dự án học React Router DOM với đầy đủ tính năng routing, authentication, và quản lý state.

## 🚀 Tính năng

- ✅ **React Router DOM** - Routing cho SPA
- ✅ **Authentication System** - Đăng nhập/đăng xuất với localStorage
- ✅ **Protected Routes** - Bảo vệ trang admin
- ✅ **Public Pages** - Home, About, Contact
- ✅ **Product Management** - Danh sách và chi tiết sản phẩm
- ✅ **Search Functionality** - Tìm kiếm sản phẩm với URL params
- ✅ **Admin Dashboard** - Quản lý sản phẩm, đơn hàng
- ✅ **Clean Code Structure** - Organized folder structure

## 📁 Cấu trúc Project

```
src/
├── components/          # Shared components
│   ├── Navbar.jsx      # Public navigation
│   ├── AdminNavbar.jsx # Admin navigation  
│   └── PrivateRouter.jsx # Auth protection
├── pages/              # Page components
│   ├── public/         # Public pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── products/   # Product pages
│   │       ├── ListProduct.jsx
│   │       └── ProductDetail.jsx
│   ├── auth/           # Authentication
│   │   └── Login.jsx
│   └── admin/          # Admin pages
│       ├── AdminIndex.jsx
│       ├── Account.jsx
│       ├── Product.jsx
│       └── Order.jsx
├── App.jsx             # Main router
└── main.jsx           # Entry point
```

## 🛠️ Công nghệ sử dụng

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool và dev server
- **localStorage** - Persistent authentication

## 🚦 Routes

### Public Routes (có Navbar)
- `/` - Trang chủ
- `/about` - Giới thiệu  
- `/contact` - Liên hệ
- `/products` - Danh sách sản phẩm
- `/products/:id` - Chi tiết sản phẩm

### Auth Routes (không navbar)
- `/login` - Đăng nhập

### Protected Admin Routes (có AdminNavbar)
- `/admin` - Dashboard admin
- `/admin/account` - Quản lý tài khoản
- `/admin/product` - Quản lý sản phẩm
- `/admin/order` - Quản lý đơn hàng

## 📋 Cách chạy project

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd react_router_dom
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy development server:**
   ```bash
   npm run dev
   ```

4. **Truy cập:** `http://localhost:5173`

## 🔐 Authentication

- **Username:** `admin`
- **Password:** `123456`

## 🎯 Học được gì

- React Router DOM setup và configuration
- Nested routing với Layout components
- Protected routes và authentication
- URL parameters và search params
- Navigation với useNavigate hook
- Conditional rendering dựa trên routes
- Clean code structure và organization
- localStorage cho persistent state

## 📚 Tài liệu tham khảo

- [React Router DOM Documentation](https://reactrouter.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
