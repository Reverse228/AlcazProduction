import React from 'react'
import BigText from '../../../../../components/bigText/BigText'
import QuestionMarkIco from '../../../../../environment/svg/QuestionMarkIco'
import "./style/style.css"

const ServicesPartName = () => {
    return <div id='servicePartName'>
        <BigText text={"Ce noi putem"} bigText={"PROPUNE"} proportion={7.145} bigTextSize={80} translateY={44}/>
        <QuestionMarkIco/>
    </div>
}

export default ServicesPartName