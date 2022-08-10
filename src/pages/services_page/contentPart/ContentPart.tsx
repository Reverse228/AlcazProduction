import React, { useEffect, useRef, useState } from 'react'
import StandartBtn from '../../../components/standartBtn/StandartBtn'
import "./style/style.css"

type Props = {
    name: string,
    title: string,
    img: string,
    desc: string,
    namePosition: number,
    btnLink?: string,
    exampleLink?: string
}

const ContentPart: React.FC<Props> = ({ name, title, desc, img, namePosition, btnLink, exampleLink }) => {
    const bg = useRef<HTMLImageElement>(null)
    const [bgHeight, setBgHeight] = useState(0)

    useEffect(() => {
        setBgHeight(bg.current?.offsetHeight !== undefined ? bg.current?.offsetHeight : 0)
    }, [bg.current?.offsetHeight])

    return <div className='contentPart'>
        <div className='content' style={{height: bgHeight}}>
            <div className='textPart'>
                <h2 style={{textAlign: namePosition % 2 === 0 ? "left" : "right"}}>{name}</h2>
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
        <img src={img} alt="service bg" ref={bg} />
    </div>
}

export default ContentPart