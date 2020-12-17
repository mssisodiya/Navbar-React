import "./App.css";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users";
import Albums from "./components/album";
import Photos from "./components/photos";
import AlbumForm from "./components/albumForm";
import PhotoForm from "./components/photoUpload";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/users" component={Users} />

          <Route path="/albums" exact component={Albums} />
          <Route path="/albums/newAlbum/:id" component={AlbumForm} />
          <Route path="/albums/:id" component={Albums} />

          <Route path="/photos" exact component={Photos} />
          <Route path="/photos/newPhoto/:id" component={PhotoForm} />
          <Route path="/photos/:id" component={Photos} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
