import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import { ArticleContainer } from "./components/ArticleContainer";
import { Route, Routes } from "react-router-dom"
import Formulario from "./components/Formulario";
import Seccion2 from "./components/Seccion2";
import Seccion3 from "./components/Articulo3";
import Articulo4 from "./components/Articulo4";







function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      
      <Routes>
        <Route element={<Formulario />} path="/Formulario"></Route>
        
      </Routes>
      <div className="lg:flex lg:gap-8">
        ese sudo e sun correo alterno 

     
        <MainArticle />
        
        <NewContainer />
      </div>
      
      <ArticleContainer />


      <Seccion3 />
      <Seccion2/>
      <Articulo4/>






    </main>

  )
}

export default App
