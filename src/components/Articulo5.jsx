
const Articulo5 = () => { 
    
    const [formulario, setFormulario] = useState({
        name:"",
        apellido:"",
        descripcion:"",
        state:"",
        edad:""
    });

    const {name, apellido, descripcion, state,edad} = formulario;
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleChange = (e) => {
        const {name, apellido, descripcion, state,edad} = e.target;
        setFormulario({
           ...formulario, [e.target.name]:e.target.value,
        });
    }
    return(
        <>
        <h1>Formulario</h1>
        <form onSubmit={ (e)=> handleSubmit(e)}>
            
         
            <input type="text" placeholder="Ingrese Nombre" 
            className="form-control mb-2" 
            name="name"  
            onChange={handleChange}/>

             <input type="text" placeholder="Ingrese Apellido" 
            className="form-control mb-2" 
            name="apellido"  
            onChange={handleChange}/>
        


            <textarea onChange={handleChange} placeholder="Ingrese Descripcion" className="form-control mb-2" name="descripcion"></textarea>
            

            <select className="form-control mb-2"
            name="state"
            value={state}
            onChange={handleChange}
    >
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>

            <input type="number" placeholder="Ingrese Edad" 
            className="form-control mb-2" 
            name="edad"  
            onChange={handleChange}/>

            
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </>
        
    )
}
export default Articulo5;