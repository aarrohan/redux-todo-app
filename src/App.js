import React from "react";

// Dependencies
import { Provider } from "react-redux";

// Store
import store from "./redux/store";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

// App
const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
          {/* Navbar */}
          <Navbar />

          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            {/* Header */}
            <Header />

            {/* Todo List */}
            <TodoList />

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Provider>
    </React.Fragment>
  );
};

// Export
export default App;
