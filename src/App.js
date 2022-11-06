import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/login";
import RegisterPage from "./components/Register/register";
import Todo from "./components/Todo/Todo"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
