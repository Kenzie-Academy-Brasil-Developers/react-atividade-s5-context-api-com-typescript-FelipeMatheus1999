import { Container, CardProduct } from "./styles";
import { useCart } from "../../Providers/Cart/index";

const Cart = () => {
  const { deleteProduct, cart } = useCart();

  const getProduct = (id: number) => {
    const product = cart.find((value) => value.id === id);

    if (product) {
      deleteProduct(product);
    }
  };

  return (
    <Container>
      {cart &&
        cart.map((value) => {
          return (
            <CardProduct key={value.id}>
              <img className="image" src={value.image} />
              <span>{value.title}</span>
              <span className="price">R$: {value.price}</span>
              <button onClick={() => getProduct(value.id)}>
                remover do carrinho
              </button>
            </CardProduct>
          );
        })}
    </Container>
  );
};

export default Cart;
