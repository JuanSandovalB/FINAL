import { useState } from "react";
const Prueba = () => {
  const [formulario, setFormulario] = useState({
    nombres:"",
    apellidos:"",
    ciudad:"",
    correo:"",
    tipodocumento:"",
    descripcion:""
});
const {nombres, apellidos, ciudad, correo,tipodocumento,descripcion,state,edad} = formulario;


const handleSubmit=(e)=>{
  e.preventDefault();
}
const handleChange = (e) => {
  const {nombres, apellidos, ciudad, correo,tipodocumento,descripcion,state,edad} = e.target;
  setFormulario({
     ...formulario, [e.target.name]:e.target.value,
  });
}

    return (

        <>
 <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
     
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Formulario</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Este es un formulario para volverte voluntario!!!
        </p>
        

      
        </div>

        <form onSubmit={ (e)=> handleSubmit(e)}>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre Completo
            </label>
          
        <input type="text" placeholder="Ingrese Nombres" 
            className="form-control mb-2" 
            name="name"  
            onChange={handleChange}/>
            </form>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Apellidos
            </label>

            <input type="text" placeholder="Ingrese Apellidos" 
            className="form-control mb-2" 
            name="name"  
            onChange={handleChange}/>

<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Sexo
            </label>

<select className="form-control mb-2"
            name="state"
            value={state}
            onChange={handleChange}
    >
                <option value="Pendiente">Masculino</option>
                <option value="Completado">Femenino</option>
                <option value="Completado">No Binario</option>
            </select>

            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Edad
            </label>

            <input type="number" placeholder="Ingrese Edad" 
            className="form-control mb-2" 
            name="edad"  
            onChange={handleChange}/>

<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Ciudad de residencia
            </label>
            <input type="text" placeholder="Ingrese Ciudad de Residencia" 
            className="form-control mb-2" 
            name="edad"  
            onChange={handleChange}/>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Correo
            </label>
            <input type="text" placeholder="Ingrese Correo Electronico" 
            className="form-control mb-2" 
            name="edad"  
            onChange={handleChange}/>

         
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
             Tipo de Documento
            </label>
            <div className="relative mt-2.5">
              < div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="Tipo"
                  placeholder="ingrese Tipo"
                  name="Tipo"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-3 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>TI</option>
                  <option>PP</option>
                  <option>CC</option>
                </select>
                
              </div>
              <input
                type="tel"
                placeholder="Ingrese Documento"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="form-control mb-2 block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          

            <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Mensaje
            </label>
            <div className="mt-2.5">
            <textarea onChange={handleChange} placeholder="Ingrese Descripcion" className="form-control mb-2" name="descripcion"></textarea>
            
            </div>
          </div>
</div>
          <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           ENVIAR
          </button>
        </div>
        </div>
      
  
         
           

          
          
                
        </>
    )
}
export default Prueba;