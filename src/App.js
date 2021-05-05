import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Backdrop from "./components/Reuseable/Backdrop";

const App = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const toggleBackdrop = () => {
    setShowBackdrop((prev) => !prev);
  };

  return (
    <div className="App">
      <Backdrop showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />
      <Router>
        <Switch>
          <>
            <Navbar toggleBackdrop={toggleBackdrop} />
            <div className="p-10">
              <img
                src="https://images.unsplash.com/photo-1619544184839-92884dfbd480?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80"
                height="500"
                width="500"
                alt="x"
              />
            </div>
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
