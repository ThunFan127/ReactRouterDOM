import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const PRODUCTS = [
    {
        id: 1,
        name: "Bò Lúc Lắc",
        price: "300.000 VND",
        image: "/images/menu-01.jpg"
    },
    {
        id: 2,
        name: "Pizza",
        price: "200.000 VND",
        image: "/images/menu-02.jpg"
    },
    {
        id: 3,
        name: "Trà Chanh",
        price: "130.000 VND",
        image: "/images/menu-03.jpg"
    },
    {
        id: 4,
        name: "Bò Hung Khói",
        price: "330.000 VND",
        image: "/images/menu-04.jpg"
    }
]

export default function ListProduct() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const nameParam = searchParams.get('name')
        if (nameParam) {
            setSearchInput(nameParam)
        }
    }, [searchParams])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(PRODUCTS))
    }, [])

    const searchTerm = searchParams.get('name') || ''
    const filteredProducts = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSearch = () => {
        if (searchInput.trim()) {
            setSearchParams({ name: searchInput.trim() })
        } else {
            setSearchParams({})
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>List product</h1>

            {/* Search box */}
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên ..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    style={{
                        padding: '8px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginRight: '10px'
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Tìm kiếm
                </button>
            </div>

            {/* Products grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {filteredProducts.map(product => (
                    <div key={product.id} style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '15px',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                marginBottom: '10px'
                            }}
                        />
                        <h3 style={{
                            margin: '10px 0',
                            fontSize: '16px',
                            color: '#333'
                        }}>
                            {product.name}
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#007bff',
                            margin: '10px 0'
                        }}>
                            {product.price}
                        </p>
                        <button
                            onClick={() => navigate(`/products/${product.id}`)}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '100%'
                            }}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}