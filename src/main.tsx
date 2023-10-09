import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './main.css';
import { ApplicationPage } from './pages/ApplicationPage'
import { StartPage } from './pages/StartPage'
import { CvPage } from './pages/CvPage'
import { ProjectPage } from './pages/ProjectPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <StartPage />},
      {path: '/projects', element: <ProjectPage />},
      {path: '/cv', element: <CvPage/>}, 
      {path: '/application_letter', element: <ApplicationPage />},
      {path: '/menu', element: <MenuPage />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
