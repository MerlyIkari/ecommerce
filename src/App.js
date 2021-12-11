import Routes from './routes';
import { ProductProvider } from './context/ProductContext';
import {ItemProvider} from './context/ItemContext';

function App() {
  return (
    <>
    <ProductProvider>
    <ItemProvider>
    <Routes />
    </ItemProvider>
    </ProductProvider>
    </>
  );
}

export default App;
