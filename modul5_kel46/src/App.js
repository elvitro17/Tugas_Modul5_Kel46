import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import { SetUser } from "./components/SetUser";
import { UserProvider } from "./components/User";
import { ShowUser } from "./components/ShowUser";


function App() {
    return (
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SetUser} />
            <Route path="/user" exact component={ShowUser} />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    );
}

export default App;
