import React, { useEffect, useRef, useState } from 'react'
import "./style/style.css"
import FooterBg from "../../environment/images/FooterBg.png"
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const bg = useRef<HTMLImageElement>(null)
    const bgHeight = bg.current?.offsetHeight
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
        setContentHeight(bgHeight !== undefined ? bgHeight : 0)
    }, [bgHeight])


    const { t } = useTranslation()
    return <div id='footer' style={{height: contentHeight}}>
        <div id='footerContent'>
            <p>{t("footer.creator")}</p>
        </div>
        <img src={FooterBg} alt="footer bg" ref={bg} />
    </div>
}

export default Footer