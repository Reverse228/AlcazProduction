import * as React from 'react';
import i18n from '../../../i18n';
import LanguaceIco from "../../../environment/svg/LanguaceIco"
import "./style/style.css"


const LanguaceBtn = () => {
    const [isHovering, setIsHovering] = React.useState(false);

    const [firstLangAnim, setFirstLangAnim] = React.useState(false);
    const [closeFirstLang, setCloseFirstLang] = React.useState(false);

    const [secondLangAnim, setSecondLangAnim] = React.useState(false);
    const [closeSecondLang, setCloseSecondLang] = React.useState(false);

    const [languageChange, setLanguageChange] = React.useState(i18n.language === "ru" ? true : false)

    React.useEffect(() => {
        setLanguageChange(i18n.language === "ru" ? true : false)
    }, [i18n.language])    

    const btnContainer = React.useRef<HTMLDivElement>(null)
    const btnContainerWidth = btnContainer.current?.offsetWidth !== undefined && btnContainer.current?.offsetWidth

    const handleMouseOver = () => {
        setIsHovering(true)
        const firstLangAnim = setTimeout(() => setFirstLangAnim(true), 300);
        const secondLangAnim = setTimeout(() => setSecondLangAnim(true), 400);
        return () => {
            clearTimeout(firstLangAnim)
            clearTimeout(secondLangAnim)
        };
    };

    const handleMouseOut = () => {
        setCloseSecondLang(true)
        const timerFinishCloseSecondLang = setTimeout(() => {
            setSecondLangAnim(false)
            setCloseSecondLang(false)
        }, 200);

        const timerStartCloseFirstLang = setTimeout(() => {
            setCloseFirstLang(true)
        }, 100);

        const timerSecondLangClose = setTimeout(() => {
            setFirstLangAnim(false)
            setCloseFirstLang(false)
            setIsHovering(false)
        }, 300);
        return () => {
            clearTimeout(timerFinishCloseSecondLang)
            clearTimeout(timerStartCloseFirstLang)
            clearTimeout(timerSecondLangClose)
        };
    };

    return (
        <div id='languaceBtn'>
            
            <div id='btnVisible'
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
                ref={btnContainer}
                style={{ width: isHovering ? "150px" : "45px" }}
            >
                {
                    btnContainerWidth > 130 && firstLangAnim &&
                    <div id='languaces'>
                        <p className={closeFirstLang ? "close" : ""} onClick={() => {
                            i18n.changeLanguage("ru")
                        }} style={{color: languageChange ? "#3C9FDD" : "#ffffff"}}>ru</p>
                        {
                            secondLangAnim && <p className={closeSecondLang ? "close" : ""} onClick={() => {
                                i18n.changeLanguage("ro")
                            }} 
                            style={{color: !languageChange ? "#3C9FDD" : "#ffffff"}}
                            >ro</p>
                        }
                    </div>
                }
                <LanguaceIco />
            </div>
        </div>
    )
}

export default LanguaceBtn