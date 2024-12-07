import Product from '../Product/Product';
import './ProductsPage.scss';
import products from '../../products';

function ProductsPage() {
    return (
        <div className='products-page'>
            <h2 className='products-page__title'>Elegant clothing for everyone</h2>

            <div className="products-page__container">
                {products.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    >
                        {product.title}
                    </Product>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
