import "./App.css";
import { UserProvider } from "./context/userContext";
import Routes from "./routes";
function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
