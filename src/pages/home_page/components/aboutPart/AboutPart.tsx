import * as React from 'react';
import { useTranslation } from 'react-i18next';
import VideoIco from '../../../../environment/svg/VideoIco';
import "./style/style.css"

const AboutPart = () => {
    const { t } = useTranslation()

    return <div id='aboutPart'>
        <div id='name'>
            <p id='companyName'>Alcaz Production</p>
            <VideoIco />
        </div>
        <h3>
            {t("homePage.about.slogo")}
        </h3>
        <p id='description'>
            {t("homePage.about.desc")}
        </p>
    </div>
}

export default AboutPart