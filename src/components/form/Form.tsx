import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FormServices, SocialMedias } from './config'
import CustomInput from './customInput/CustomInput'
import CustomTextArea from './customTextArea/CustomTextArea'
import "./style/style.css"

const Form = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()

    const [phone, setPhone] = useState()
    const [mail, setMail] = useState()

    const [chooseSocialMediaIdx, setChooseSocialMediaIdx] = useState(0)
    const [chooseSocialMediaName, setChooseSocialMediaName] = useState("Telegram")

    useEffect(() => { 
        SocialMedias.map((socialMedia, idx) => {
            if (chooseSocialMediaIdx === idx) {
                setChooseSocialMediaName(socialMedia.name)
            }
        })
    }, [chooseSocialMediaIdx])

    const { t } = useTranslation()

    return <div className='form'>
        <div className='chooseService'>
            <p>{t("form.services.choose")}:</p>
            <div className='formServices'>
                {FormServices.map((formService, idx: number) => {
                    return <div className='formService' key={idx}>
                        <p>{t(`${formService.name}`)}</p>
                        <formService.ico />
                    </div>
                })}
            </div>

        </div>
        <div className='userInfo'>
            <div className='userName'>
                <CustomInput name={t("form.name")} setInfo={setName} />
                <CustomInput name={t("form.surname")} setInfo={setSurname} />
            </div>
            <div className='userContact'>
                <CustomInput name={t("form.phone")} setInfo={setPhone} />
                <CustomInput name={t("form.mail")} setInfo={setMail} />
            </div>
        </div>
        <div className='footerPart'>
            <CustomTextArea />
            <div className='rightFooterPart'>
                <div className='socialMediaChoose'>
                    <div className='chooseSocialText'>
                        <p>{t("form.socialMedia")}:</p>
                        <p>{chooseSocialMediaName}</p>
                    </div>
                    <div className='socialMedias'>{SocialMedias.map((socialMedia, idx) => {
                        return <div className='socialMedia' onClick={() => {
                            setChooseSocialMediaIdx(idx)
                        }}>
                            <socialMedia.ico key={idx} />
                        </div>
                    })}</div>
                </div>
                <div className='btnSendForm'>
                    <p>{t("form.btn")}</p>
                </div>
            </div>
        </div>
    </div>
}

export default Form