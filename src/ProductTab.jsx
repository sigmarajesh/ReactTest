import Product from "./Product.jsx";

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    return(
        <>
            <Product title="pen" price={30} features={options} />
            <Product title="phone" price={30000 /2} />
            <Product title="laptop" price={40000} />
        </>
    )
};

export default ProductTab;