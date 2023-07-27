import './About.css';
import Lane from "./Lane.js"
import worker from "../images/worker.png";
import work from "../images/work.png";
import Logout from "./Logout";
export default function About(props) {
    return (
        <>
            <div className='about'>
                <Lane firstParagraph='Геннадий Цидармян' secondParagraph='Руководитель проектов' imageSrc={worker}/>
                <Lane firstParagraph='Объект: м.Китай-город, РосАтом' secondParagraph='' imageSrc={work}/>
                <Lane />
                <Lane />
                <Logout imageSrc={work} />
            </div>
        </>
    )
}