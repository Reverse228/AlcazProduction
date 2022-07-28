import React from 'react'
import { bigText } from '../config'

type Props = {
    setPageLoad: any
}

const AnimationText:React.FC<Props> = ({setPageLoad}) => {

    const [createSimpleText, setCreateSimpleText] = React.useState(false)
    const [simpleTextEndAnim, setSimpleTextEndAnim] = React.useState(false)

    const [bigTextArr, setBigTextArr] = React.useState<string[]>([])


    React.useEffect(() => {
        const createSimpleTextCheck = setTimeout(() => {
            setCreateSimpleText(true)
        }, 500);

        return () => { clearTimeout(createSimpleTextCheck) }
    }, [])

    React.useEffect(() => {
        if (createSimpleText) {
            const simpleTextAnim = setTimeout(() => {
                setSimpleTextEndAnim(true)
            }, 1500);
    
            return () => { clearTimeout(simpleTextAnim) }
        } 
    }, [createSimpleText])

    React.useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i < bigText.ro.length && bigTextArr.length == 0 && simpleTextEndAnim) {
                    setBigTextArr(arr => [...arr, bigText.ro[i - 1]]);  
                i++;
            }       
        }, 100);
        return () => clearInterval(interval);

    }, [simpleTextEndAnim]);

    React.useEffect(() => {
        if (bigTextArr.length === bigText.ro.length) {
            const pageLoad = setTimeout(() => {
                setPageLoad(true)
            }, 1500);

            return () => { clearTimeout(pageLoad) }
        }
    }, [bigTextArr.length])

    return <div id='startText'>
    {createSimpleText && <p>Creem doar ceea ce</p>}
    <div id='bigTextContainer'>
        {
            bigTextArr.map((letter: string, idx: number) => {
                return <h2 key={idx}>{letter}</h2>
            })
        }
    </div>
</div>
}

export default AnimationText