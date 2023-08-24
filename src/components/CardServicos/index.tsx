import "./style.css"
import { Link } from "react-router-dom"
export default function CardServicos(props: any) {
    
    function parseListaTechs(){
        if(typeof props.techs === "string"){
          return JSON.parse(props.techs)
        } else{
          return props.techs
        }
      }
    return (
        //     <div className="dev">
        //     <div className="grupo_contato">
        //       <img src={props.foto} alt="" />
        //       <div className="contato_dev">
        //         <h3>{props.nome}</h3>
        //         <p>{props.email}</p>
        //       </div>
        //     </div>
        //     <div className="techs">
        //      {
        //       props.techs.map((tech: string, index: number) => {
        //         return <span key={index}>{tech}</span>
        //       })
        //      }
        //     </div>
        //   </div>
        
            <div className="servico">
                <div className="topo_servico">
                    
                    <Link to={"/servicos/" + props.id}>{props.titulo}</Link>
                    {/* <Link to={"/perfil/" +  props.id}>{ props.nome}</Link> */}
                   
                    <span>{props.preco}</span>
                </div>
                <p>
                {props.texto}
                </p>
                <div className="techs">
                    {
                        parseListaTechs().map((tech: string, index: number) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
            </div>
        
    )
}