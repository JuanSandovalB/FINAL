import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
        <article className="text-SoftRed text-4xl font-bold">-Voluntariados-</article>
       
        <NewArticle
            title='0.1 Alemania'
            text='Es una excelente opción si buscas un país rico en cultura, gastronomía y diferentes atracciones turísticas.'
        />
        <NewArticle
            title='0.2 Costa Rica'
            text='Es famosa por su impresionante biodiversidad, vastos espacios protegidos y clima cálido'
        />
        <NewArticle
            title='0.3 Argentina'
            text='Cuenta con algunas de las maravillas, hay una gran variedad de paisajes naturales para explorar.'
        />
        <NewArticle
            title='0.4 Ecuador'
            text='Es uno de los países que más diversidad natural posee en el mundo con miles de especies de fauna y flora diferentes'
        />
             
    </aside>
  )
}


 

  



  


