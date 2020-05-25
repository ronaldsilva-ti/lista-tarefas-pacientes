import React from 'react';
import PropTypes from 'prop-types';


const mystyle = {
    marginTop: '5px'
}

const Cita = ({citacao, eliminarCita}) => (
    <div className="cita" style={mystyle}>
        <p>Animal:<span>{citacao.animal}</span> </p>
        <p>Nome do Dono:<span>{citacao.proprietario}</span> </p>
        <p>Conclusao:<span>{citacao.conclusao}</span> </p>
        <p>Hora:<span>{citacao.hora}</span> </p>
        <p>Sintomas:<span>{citacao.sintomas}</span> </p> 
        
        <button 
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(citacao.id)}>
            Deletar &times;
        </button> 


    </div>

)

Cita.propTypes = {
    citacao:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired
}
export default Cita;