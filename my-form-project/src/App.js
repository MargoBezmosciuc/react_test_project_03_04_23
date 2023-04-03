import "./App.css";
import FormPerson from "./components/FormPerson";
import { ContextProvider } from "./globals/context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <FormPerson />
      </div>
    </ContextProvider>
  );
}

export default App;
