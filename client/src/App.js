import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { theme } from "./utilities/theme";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Route path="/">
          <Home />
        </Route>
      </div>
    </ThemeProvider>
  );
}

export default App;
