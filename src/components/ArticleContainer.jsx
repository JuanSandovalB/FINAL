import img1 from '../assets/images/Alemania.jpg'
import img2 from '../assets/images/CostaRica.jpg'
import img3 from '../assets/images/Argentina.jpg'

import { Article } from "./Article";

export const ArticleContainer = () => {
  return (
    <section className="mt-6 lg:flex">
        
        <Article
       
            img={img1}
            number='01'
            title='Alemania'  
            text=' En las ciudades de: Berlín, Múnich, Bochum, Hamburgo, Núremberg, Boon '
        />
        <Article
            img={img2}
            number='02'
            title='Costa Rica'
            text='En las ciudades de: San José,  Heredia, Liberia, Limón, Cartago, Puntarenas'
        />
        <Article
            img={img3}
            number='03'
            title='Argentina'
            text='En las ciudades de: Buenos Aires, Salta, Mar de Plata, La Plata, Rosario'
        />
    </section>
    
  )
}
