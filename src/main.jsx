import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Layout from "./components/Layout.jsx"
import TestsPage from "./pages/TestsPage"
import Challenges from "./pages/Challenges"
import Home from "./pages/Home.jsx"
import DesconectaPage from "./DesconectaPage.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/" element={<Layout><DesconectaPage /></Layout>} />
        <Route path="/testes" element={<Layout><TestsPage /></Layout>} />
        <Route path="/desafio" element={<Layout><Challenges /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
