import { AuthProvider } from "./providers/userProvider/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
