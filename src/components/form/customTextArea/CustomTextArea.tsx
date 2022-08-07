import React, {} from 'react'
import { useTranslation } from 'react-i18next'
import './style/style.css'


const CustomTextArea = () => {
    const { t } = useTranslation()

    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)  

    return <div className={focused ? "commentPart acTextArea" : "commentPart"}>
    <p>{t("form.comment")}</p>
    <textarea name="comment" cols={30} rows={10} onFocus={onFocus} onBlur={onBlur}></textarea>
</div>
}

export default CustomTextArea