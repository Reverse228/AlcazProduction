import * as React from 'react';
import AnimationText from './animationText/AnimationText';
import './style/style.css'

const StartPart = () => {
    const [pageLoad, setPageLoad] = React.useState(false)

    return <div id='startPart'>
        <div id='animationTextContainer' style={{transform: `translate(${pageLoad ? 0 : 50}%, 25%)`}}>
            <AnimationText setPageLoad={setPageLoad}/>
        </div>
    </div>
}

export default StartPart