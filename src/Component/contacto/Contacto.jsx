import { useForm } from "react-hook-form";

const Contacto = () => {

    const {register, handleSubmit} =  useForm()
    const enviar= (data) => {
        console.log(data)
    }
    
    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario"onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresa tunombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")}/>
                <input type="phone" placeholder="Ingresa tu n° de celular" {...register("telefono")}/>
                <button type="submmit">Enviar</button>
            </form>
        </div>
    )


}
export default Contacto