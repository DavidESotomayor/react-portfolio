import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import About from "./pages/about"
import ProjectsPage from "./pages/projectsPage"
import Contact from "./pages/contact"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
