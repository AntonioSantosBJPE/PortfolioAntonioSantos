import { RoutesApp } from "./routes";
import { GlobalStyle } from "./styles/Global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesApp />
    </div>
  );
};
