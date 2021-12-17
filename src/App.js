import Routes from './routes';
import { UserProvider } from "./context/userContext";
import { ProductProvider } from './context/ProductContext';
import {ItemProvider} from './context/ItemContext';

function App() {
  return (
    <>
    <UserProvider>
    <ProductProvider>
    <ItemProvider>
    <Routes />
    </ItemProvider>
    </ProductProvider>
    </UserProvider>
    </>
  );
}

export default App;
