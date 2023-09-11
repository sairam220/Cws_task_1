import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsCard from "./components/DetailsCard";
import Table4 from "./components/Table4";
import Table5 from "./components/Table5";
import Table6 from "./components/Table6";
import Table7 from "./components/Table7";
import Table8 from "./components/Table8";
import Table9 from "./components/Table9";
import MultiTable from "./components/MultiTable";
import Table14 from "./components/Table14";
import Table15 from "./components/Table15";
import Table16 from "./components/Table16";
import Table17 from "./components/Table17";
import Table18 from "./components/Table18";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetailsCard />} />
        <Route path="/table-4" element={<Table4 />} />
        <Route path="/table-5" element={<Table5 />} />
        <Route path="table-6" element={<Table6 />} />
        <Route path="table-7" element={<Table7 />} />
        <Route path="table-8" element={<Table8 />} />
        <Route path="table-9" element={<Table9 />} />
        <Route path="multi-table" element={<MultiTable />} />
        <Route path="table-14" element={<Table14 />} />
        <Route path="table-15" element={<Table15 />} />
        <Route path="table-16" element={<Table16 />} />
        <Route path="table-17" element={<Table17 />} />
        <Route path="table-18" element={<Table18 />} />
      </Routes>
    </Router>
  );
}

export default App;
