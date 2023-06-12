import Footer from './components/Footer';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
