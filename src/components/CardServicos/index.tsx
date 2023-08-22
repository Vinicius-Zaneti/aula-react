import "./style.css"
import { Link } from "react-router-dom"
export default function CardServicos(props: any) {

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
                    <h3>
                    <Link to={"/servicos/" + props.id}>{props.nome}</Link>
                    {/* <Link to={"/perfil/" +  props.id}>{ props.nome}</Link> */}
                    </h3>
                    <span>{props.preco}</span>
                </div>
                <p>
                {props.texto}
                </p>
                <div className="techs">
                    {
                        props.techs.map((tech: string, index: number) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
            </div>
        
    )
}