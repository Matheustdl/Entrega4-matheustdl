import { ContactProvider } from "./providers/contactProvider";
import { AuthProvider } from "./providers/userProvider/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </AuthProvider>
    </>
  );
}

export default App;
