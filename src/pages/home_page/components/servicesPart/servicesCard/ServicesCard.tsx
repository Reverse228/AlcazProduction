import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import ArrowIco from '../../../../../environment/svg/ArrowIco'
import './style/style.css'

type Props = {
    name: string,
    ico: ReactElement,
    desc: string,
    link?: string
}

const ServicesCard: React.FC<Props> = ({ name, ico, desc, link }) => {
    const [isHovering, setIsHovering] = React.useState(false);

    const { t } = useTranslation()

    const handleMouseOver = () => {
        setIsHovering(true)
    };

    const handleMouseOut = () => {
        setIsHovering(false)
    };

    return <div className='servicesCard'>
        <div className='nameContainer'>
            <h3>{name}</h3>
            {ico}
        </div>
        <div className='descContainer'>
            <p>{desc}</p>
            <div className='btns' onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}>
                <p>{t("homePage.whatWeCan.btnText")}</p>
                <div className={`${isHovering ? "arrows acBtn" : "arrows"}`}>
                    <ArrowIco ac={isHovering ? true : false} type={false} />
                    <ArrowIco ac={isHovering ? true : false} type={true} />
                </div>
            </div>
        </div>
    </div>
}

export default ServicesCard