import React,{useState, useEffect} from 'react';
import Formulario from './components/Formularios';
import Cita from './components/Cita'



function App() {

  //Citacoes em localStorage
  let citacoesIniciais = JSON.parse(localStorage.getItem('citacoes'));
    if(!citacoesIniciais){
      citacoesIniciais = [];
    }


  //Array que cria citacao
  const [citacoes,guardarCitacao] = useState(citacoesIniciais);


  //useEffect para realizar certas operaçoes quando o estado muda
  useEffect( () => {
    let citacoesIniciais = JSON.parse(localStorage.getItem('citacoes'));

    if(citacoesIniciais){
      localStorage.setItem('citacoes',JSON.stringify(citacoes));
    }else{
      localStorage.setItem('citacoes',JSON.stringify([]));
    }
  }, [citacoes] );

  //Funcao que pega as citacoes atualizada e insere novas
  const criarCitacao = citacao => {
    guardarCitacao([
      ...citacoes,
      citacao

    ])
  }

  //Função que deleta uma  citacao pelo id
  const eliminarCita = id => {                             
      const novasCitacoes = citacoes.filter(citacao => citacao.id !== id);
      guardarCitacao(novasCitacoes)
  }

  //Mensagem Condicional
  const titulo = citacoes.length === 0 ? 'Não há citações': 'Administra citações';


  return (
    <>
      <h1>Administrador de Paciente</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
             <Formulario
                criarCitacao={criarCitacao}         
             />
            </div>

            <div className="one-half column">
                <h2>{titulo}</h2>
                  {citacoes.map(citacao =>(
                    <Cita
                      key={citacao.id}
                      citacao={citacao}
                      eliminarCita={eliminarCita}
                    />
                  ))}
            </div>
          </div>
        </div>

    </>
  );
}

export default App;
