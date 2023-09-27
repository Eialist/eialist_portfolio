import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css';
import { ApplicationPage } from './pages/ApplicationPage.tsx'
import { StartPage } from './pages/StartPage.tsx'
import { CvPage } from './pages/CvPage.tsx'
import { ProjectPage } from './pages/ProjectPage.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <StartPage />},
      {path: '/projects', element: <ProjectPage />},
      {path: '/cv', element: <CvPage/>}, 
      {path: '/application_letter', element: <ApplicationPage />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
