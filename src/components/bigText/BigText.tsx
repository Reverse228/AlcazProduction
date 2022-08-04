import * as React from 'react';
import "./style/style.css"

type Props = {
    text: string
    bigText: string
    bigTextSize?: number
    color?: string
    proportion: number
    translateY: number
}

const BigText:React.FC<Props> = ({text, bigText, bigTextSize, color, proportion, translateY}) => {
    const [textWidth, setTextWidth] = React.useState(0)
    const [textFontSize, setTextFontSize] = React.useState(0)

    const bigTextPerops = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        setTextWidth(bigTextPerops.current?.offsetWidth !== undefined ? bigTextPerops.current?.offsetWidth : 0);
        setTextFontSize(textWidth / proportion)
    }, [bigTextPerops.current?.offsetWidth])
           
    return <div className='bigText' style={{color: color ? color : "#ffffff"}}>
        <p style={{width: textWidth, fontSize: textFontSize, transform: `translateY(${translateY}%)`}}>{text}</p>
        <h2 style={{fontSize: bigTextSize ? bigTextSize : 30 }} ref={bigTextPerops}>{bigText}</h2>
    </div>
}

export default BigText