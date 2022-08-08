import React from 'react'
import { useTranslation } from 'react-i18next'
import ContentPart from './contentPart/ContentPart'
import { ServicesContent } from './serviceConfig'

const ServicesPage = () => {
    const { t } = useTranslation()

    return <div id='servicePage'>
        {ServicesContent.map((serviceContent) => {
            return <ContentPart
                name={t(serviceContent.name)}
                title={t(serviceContent.title)}
                desc={t(serviceContent.desc)}
                img={t(serviceContent.img)}
            />
        })}
    </div>
}

export default ServicesPage