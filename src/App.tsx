import {Routes, Route} from "react-router-dom";
import './App.css'
import Portfolio from "./Pages/portfolio/Portfolio.tsx";
export const App = () => (
    <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
);

