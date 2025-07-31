import './App.css'
import Home from './components/Home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Layout from './components/layout/Layout'
import NotFound from './components/notFound/NotFound'
import Portfolio from './components/portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  
  const router = createBrowserRouter ([
    {
      path: '' ,
      element: <Layout/> ,
      children: [{
        index: true ,
        element: <Home/>
      },{
        path: '/about' ,
        element: <About/> 
      },{
        path: '/portfolio' ,
        element: <Portfolio/> 
      },{
        path: '/contact' ,
        element: <Contact/>
      },{
        path: '*' ,
        element: <NotFound/>
      }]
    }
  ])

  return (
    <>
    
    <RouterProvider router={router} />

    </>
  )
}

export default App
