import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./EllipticalProducts.css";

const API = "https://fakestoreapi.com/products";

function EllipticalProducts() {
  const [products, setProducts] = useState([]);
  const [angle, setAngle] = useState(0);
  const [isGrid, setIsGrid] = useState(false);

  const { addToCart } = useCart();

  // Fetch products
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        const many = [...data, ...data];
        setProducts(many.slice(0, 24));
      });
  }, []);

  // Rotate ellipse
  useEffect(() => {
    if (isGrid) return;

    const timer = setInterval(() => {
      setAngle(a => a + 0.4);
    }, 30);

    return () => clearInterval(timer);
  }, [isGrid]);

  // Scroll toggle
  useEffect(() => {
    const onScroll = () => setIsGrid(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`ellipse-wrapper ${isGrid ? "grid" : "orbit"}`}>
      {!isGrid && <div className="ellipse-path" />}

       {/* CENTER TEXT + ARROW */}
   {!isGrid && (
  <div className="center-image">
    <img
      src="https://tse4.mm.bing.net/th/id/OIP.y7S4S_EXkRWg8_ozwNkLLwHaFl?rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Shopping Graphic"
    />
  </div>
)}


      {products.map((p, i) => {
        const theta = (360 / products.length) * i + angle;
        const rad = (theta * Math.PI) / 180;

        return (
          <div
            key={p.id + i}
            className="product-card"
            style={
              isGrid
                ? {}
                : {
                    transform: `translate(${Math.cos(rad) * 45}vw, ${Math.sin(rad) * 18}vh)`
                  }
            }
          >
            <img src={p.image} alt={p.title} />

            {isGrid && (
              <div className="card-info">
                <h4>{p.title}</h4>
                <p>${p.price}</p>

                <div className="btn">
                  <button onClick={() => addToCart(p)}>Add to Cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default EllipticalProducts;
