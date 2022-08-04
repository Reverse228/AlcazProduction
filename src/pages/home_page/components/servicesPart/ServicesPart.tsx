import React, { useEffect, useRef, useState } from 'react'
import "./style/style.css"
import homeServicesBg from "../../../../environment/images/HomeServiceBg.png"
import ServicesPartName from './servicePartName/ServicePartName'
import { ServicesCardConfig } from './config'
import ServicesCard from './servicesCard/ServicesCard'
import { useTranslation } from 'react-i18next'

const ServicesPart = () => {
    const imgRef = useRef<HTMLImageElement>(null)
    const [imgHeight, setImgHeight] = useState(0)

    const { t } = useTranslation()

    useEffect(() => {
        setImgHeight(imgRef.current?.offsetHeight !== undefined ? imgRef.current?.offsetHeight : 0)
    }, [imgRef.current?.offsetHeight])

    return <div id='servicesPart'>
        <ServicesPartName />
        <div id='services'>
            <div id='servicesCards' style={{ height: imgHeight }}>
                {ServicesCardConfig.map((serviceCard, idx: number) => {
                    return <ServicesCard name={t(serviceCard.name)} ico={<serviceCard.ico />} desc={t(serviceCard.text)} key={idx} />
                })}
            </div>
            <img src={homeServicesBg} alt="homeServicesBg" ref={imgRef} />
        </div>
    </div>
}

export default ServicesPart