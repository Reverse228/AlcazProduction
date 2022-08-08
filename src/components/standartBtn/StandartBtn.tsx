import React from 'react'
import { useTranslation } from 'react-i18next'
import ArrowSendIco from '../../environment/svg/ArrowSendIco'
import "./style/style.css"

type Props = {
    text: string,
    link?: string
}

const StandartBtn:React.FC<Props> = ({text, link}) => {
    const { t } = useTranslation()

    return <div className='standartBtn'>
        <p>{t(text)}</p>
        <ArrowSendIco />
    </div>
}

export default StandartBtn