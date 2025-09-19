import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const storedProducts = localStorage.getItem('products')
        if (storedProducts) {
            const products = JSON.parse(storedProducts)
            const foundProduct = products.find(p => p.id === parseInt(id))
            setProduct(foundProduct)
        }
    }, [id])

    if (!product) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Không tìm thấy sản phẩm</h2>
                <button
                    onClick={() => navigate('/products')}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Quay lại danh sách
                </button>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <button
                onClick={() => navigate('/products')}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
            >
                ← Quay lại
            </button>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                <div style={{ flex: '1' }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{
                            width: '100%',
                            maxWidth: '300px',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }}
                    />
                </div>

                <div style={{ flex: '1' }}>
                    <p style={{
                        fontSize: '16px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                        ID: {product.id}
                    </p>

                    <p style={{
                        fontSize: '18px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                        Tên sản phẩm: {product.name}
                    </p>

                    <p style={{
                        fontSize: '20px',
                        color: '#e74c3c',
                        fontWeight: 'bold'
                    }}>
                        Giá: {product.price}
                    </p>
                </div>
            </div>
        </div>
    )
}