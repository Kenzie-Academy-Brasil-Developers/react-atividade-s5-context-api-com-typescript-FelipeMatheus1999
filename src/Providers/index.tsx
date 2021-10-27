import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface PropsProviders {
  children: ReactNode;
}

const Providers = ({ children }: PropsProviders) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
