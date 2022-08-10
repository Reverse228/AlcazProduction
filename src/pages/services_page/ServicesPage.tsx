import React from 'react'
import { useTranslation } from 'react-i18next'
import ContentPart from './contentPart/ContentPart'
import { ServicesContent } from './serviceConfig'

const ServicesPage = () => {
    const { t } = useTranslation()

    return <div id='servicePage'>
        {ServicesContent.map((serviceContent, idx) => {
            return <ContentPart
                name={t(serviceContent.name)}
                title={t(serviceContent.title)}
                desc={t(serviceContent.desc)}
                img={serviceContent.img}
                key={idx}
            />
        })}
    </div>
}

export default ServicesPage