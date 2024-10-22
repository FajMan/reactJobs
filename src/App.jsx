import React from "react"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage';
import MainLayout from "./MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/jobs" element={<JobsPage/>} />
      <Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
   
  )
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
