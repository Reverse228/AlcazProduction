import React from 'react'
import StandartBtn from '../../../components/standartBtn/StandartBtn'
import "./style/style.css"

type Props = {
    name: string,
    title: string,
    img: string,
    desc: string,
    btnLink?: string,
    exampleLink?: string
}

const ContentPart: React.FC<Props> = ({ name, title, desc, img, btnLink, exampleLink }) => {
    return <div className='contentPart'>
        <div className='content'>
            <div className='textPart'>
                <h2>{name}</h2>
                <div className='aboutService'>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='btnsPart'>
                <StandartBtn text={"servicesPage.btnText"}/>
                <p className='exampleLink'>Exemple</p>
            </div>
        </div>
        <img src={img} alt="service bg" />
    </div>
}

export default ContentPart