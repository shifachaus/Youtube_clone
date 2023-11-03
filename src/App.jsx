import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultContainer from "./components/SearchResultContainer";
import ThemeContext from "./context/theme_context";
import { useState } from "react";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };
  return (
    <Provider store={store}>
      <Router>
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
          <div className=" flex flex-col h-full ">
            <Head />
            <Routes>
              <Route path="/" element={<Body />}>
                <Route index element={<MainContainer />} />
                <Route path="/result" element={<SearchResultContainer />} />
              </Route>
              <Route path="/watch" element={<WatchPage />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
