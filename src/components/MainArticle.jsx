import imageMobile from '../assets/images/imagen2.webp'
import imageDesktop from '../assets/images/imagen2.webp'
import {NavLink} from "react-router-dom";

export const MainArticle = () => {
  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width: 600px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal imagen  " />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-8 px-8'>
         <h2 className='text-[40px] font-bold  sm:text-[58px] leading-none'>¿Que es ser voluntario?</h2>
        </div>
        <div className='flex-2 pt-12 '>
          <p className='text-[13px] mb-10 sm:text-[15px]'>Voluntario es aquella persona que se integra de una forma libre y sin coacción 
          en una organización sin ánimo de lucro para, de modo altruista, ayudar en diversas actividades sociales respetando y potenciando la libertad, 
          los valores y las capacidades de las personas asistidas.</p>
          <div className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue text-center '> 
          <NavLink className=" font-semibold" to="/Animate">Animate!</NavLink>
        </div>
        </div>
      </div>
      
    </section>
  )
}





