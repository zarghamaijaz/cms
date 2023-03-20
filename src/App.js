import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import AdminRoute from "./routes/AdminRoute";
import PublicRoute from "./routes/PublinRoute";

// Importing pages
import Testpage from "./pages/signin/testpage/testpage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminRoute/>}>
          <Route path="/test" element={<Testpage/>}/>
        </Route>
        <Route path="signin" element={<PublicRoute/>}>
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
