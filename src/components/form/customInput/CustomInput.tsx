import * as React from 'react';
import "./style/style.css"

type Props = {
    name: string,
    setInfo: any,
}

const CustomInput:React.FC<Props> = ({name, setInfo}) => { 
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)  

    return <div className={focused ? "CustomInput acInput" : "CustomInput"}>
         <p>{name}</p>
         <input type="text"  onChange={(e) => {setInfo(e.target.value)}} onFocus={onFocus} onBlur={onBlur} />
    </div>
}

export default CustomInput