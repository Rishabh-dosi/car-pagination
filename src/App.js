import React from "react";
import Page from "./Page";
import { BrowserRouter , Routes , Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="page/:page" element={<Page/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
