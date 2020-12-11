import "./App.css";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users";
import Albums from "./components/album";
import Photos from "./components/photos";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/albums" component={Albums} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
