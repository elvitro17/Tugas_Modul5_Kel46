import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import { SetUser } from "./components/SetUser";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SetUser} />
                    
                </Switch>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
