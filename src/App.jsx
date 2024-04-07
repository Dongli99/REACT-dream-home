import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { ListStaffs } from "./page/staff/List";
import { UpdateStaff } from "./page/staff/Update";
import { HireStaff } from "./page/staff/Hire";
import { OpenBranch } from "./page/branch/Open";
import { ListBranches } from "./page/branch/List";
import { UpdateBranch } from "./page/branch/Update";
import { SearchBranch } from "./page/branch/Search";
import { ListClients } from "./page/client/List";
import { RegisterClient } from "./page/client/Register";
import { SearchClient } from "./page/client/Search";
import { HomePage } from "./page/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/staff/all" element={<ListStaffs />} />
        <Route path="/staff/hire" element={<HireStaff />} />
        <Route path="/staff/update/:staffNo" element={<UpdateStaff />} />
        <Route path="/branch/all" element={<ListBranches />} />
        <Route path="/branch/open" element={<OpenBranch />} />
        <Route path="/branch/update/:branchNo" element={<UpdateBranch />} />
        <Route path="/branch/search" element={<SearchBranch />} />
        <Route path="/client/all" element={<ListClients />} />
        <Route path="/client/register" element={<RegisterClient />} />
        <Route path="/client/search" element={<SearchClient />} />
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
