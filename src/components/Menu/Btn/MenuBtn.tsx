import React, { ReactElement } from 'react'
import "./style/style.css"

type Props = {
    btnText: string
    ico: ReactElement
    onClick(): void
    acClass: string
}

const MenuBtn:React.FC<Props> = ({btnText, ico, onClick, acClass}) => {
    return ( <div className={`menuBtn ${acClass}`} onClick={onClick}>
        <p>{btnText}</p>
        {ico}
    </div> );
}

export default MenuBtn;