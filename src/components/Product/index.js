import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/cart/actions";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price } = product;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCart(id))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          Adicionar item no carrinho
        </button>
      )}
    </div>
  );
};

export default Product;
