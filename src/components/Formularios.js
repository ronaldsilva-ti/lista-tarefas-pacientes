import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({criarCitacao}) => {

    const [citacao,atualizarCitacao] = useState({

        animal: '',
        proprietario:'',
        conclusao:'',
        hora:'',
        sintomas:''
        
    })

    const [error,atualizaErro] = useState(false);

    //função que executa quando usuario escreve em um input
    const atualizarState = e =>{
        atualizarCitacao({
            ...citacao,
            [e.target.name]:e.target.value
                    
        })
    }

    //extraindo os valores
    const {animal,proprietario,conclusao,hora,sintomas} = citacao;
 

    //Quando o usuario clica para enviar o formulario
    const submitCitacao =  (e) => {
        e.preventDefault();

        //Validar
        if(animal.trim() === '' || proprietario.trim() === ''|| 
            conclusao.trim() === '' || sintomas.trim() === ''){
             atualizaErro(true)
            return;//se não o programa continua
        }

        //Eliminar mensagem de erro;
        atualizaErro(false);

        //inserir ID para elemento se tornar unico
        citacao.id = uuidv4();     
        
        //Criar a citacao
        criarCitacao(citacao);


        //Reiniciar Formulario
        atualizarCitacao({

            animal: '',
            proprietario:'',
            conclusao:'',
            hora:'',
            sintomas:''
        })

} 

    return(
        <>
           <h1>Criar citação</h1>

           {error ? <p className="alerta-error">Todos os campos são obrigatorios</p> : null}
                
           
           <form
                onSubmit={submitCitacao}
           >
                <label>Nome do animal</label>
                    <input
                        type="text"
                        name="animal"
                        className="u-full-width"
                        placeholder="Nome do animal"
                        onChange={atualizarState}
                        value={animal}
                        autocomplete="off" 
                    />

                    <label>Nome do Dono</label>
                    <input
                        type="text"
                        name="proprietario"
                        className="u-full-width"
                        placeholder="Nome do Dono"
                        onChange={atualizarState}
                        value={proprietario}
                        autocomplete="off" //tira  suposição para inserir no input
                    />

                    <label>Conclusao</label>
                    <input
                        type="date"
                        name="conclusao"
                        className="u-full-width"
                        onChange={atualizarState}   
                        value={conclusao}                     
                    />

                    <label>Hora</label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={atualizarState} 
                        value={hora}                           
                    />


                    <label>Sintomas</label>
                    <textarea
                        type="text"
                        name="sintomas"
                        className="u-full-width"
                        onChange={atualizarState}
                        value={sintomas}                                               
                    />
                    <button
                        type="submit"
                        className="u-full-width button-primary"
                    
                    >Agregar citação</button>
    
            </form>


        </>


    )
}


Formulario.propTypes = {
    criarCitacao: PropTypes.func.isRequired
}


export default Formulario;