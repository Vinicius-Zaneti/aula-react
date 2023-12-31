//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../utils/api";


function VisualizarServico() {

    const {idServicos} = useParams();

    const [nome, setNome] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [techs, setTechs] = useState<string[]>([])

    useEffect(() =>{
        document.title = "Servico: "+ nome + "- VSConnect"

        buscarServicoPorId()
    },[])

    function  buscarServicoPorId(){

        api.get("servicos/" + idServicos).then((response: any) =>{
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
            setTechs(response.data.techs)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço - {nome}</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                    {
                                techs.map((tech: any, index: number) =>{
                                    return <span key={index}>{tech}</span>
                                })
                            }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;