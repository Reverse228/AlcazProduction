import React, { useState } from 'react'
import logo from "../../environment/images/logo.png";
import MenuBtn from './Btn/MenuBtn';
import LanguaceBtn from './LanguaceBtn/LanguaceBtn';
import { menuBtns } from './Config';
import {useTranslation} from 'react-i18next'
import "./style/style.css"
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const [activeBtn, setActiveBtn] = useState(0)

    return (<div id='menu'>
        <div id='menuContent' style={{
          width: `1000px` 
        }}>
            <img src={logo} alt="logo" />
            <div id='btns'>
                {menuBtns.map((btn, idx: number) => {
                    return <MenuBtn btnText={t(`menu.${btn.name}`)} ico={<btn.ico />} key={idx}  onClick={() => {
                        setActiveBtn(idx)
                        navigate(btn.link)
                    }}
                        acClass={idx === activeBtn ? "ac" : ''}
                    />
                })}
            </div>
            <LanguaceBtn />
        </div>
    </div>);
}

export default Menu;