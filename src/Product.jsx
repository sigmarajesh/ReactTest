import "./Product.css"

function Product({title, price, features}) {
//const list = features.map((options) => <li>{options}</li>);
    return (
        <div className="Product">
             <h2>{title}</h2>
             <h5>Price :{price}</h5>
             <p>{features}</p>
        </div>
    );
}
export default Product;