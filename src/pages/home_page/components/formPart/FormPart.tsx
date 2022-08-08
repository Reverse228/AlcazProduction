import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from '../../../../components/form/Form'
import "./style/style.css"

const FormPart = () => {
    const { t } = useTranslation()

    return <div id='formPart'>
        <p id='formDesc'>{t("form.desc")}</p>
        <Form />
    </div>
}

export default FormPart