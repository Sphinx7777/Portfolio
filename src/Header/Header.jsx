import React from 'react'
import s from './Header.module.scss'
import brother from "../images/sfinx.jpg";


export const Header = ({menuShowStatus,setToggleShowSideBar}) => {



	return (
		<div className={!menuShowStatus ? s.headerWrapper : s.headerWrapper+' '+s.headerDisableMenu}>
			<header className={s.header}>
				<div className={s.menu}>
					{!menuShowStatus
						? <div className={s.toggleMenu} onClick={()=>{setToggleShowSideBar(true)}}>Скрыть меню</div>
						: <div className={s.toggleMenu} onClick={()=>{setToggleShowSideBar(false)}}>Показать меню</div>
					}
				</div>
				<div>
					<h2 className={s.headTitle}>Тренировочный проект</h2>
					<span className={s.comment}>"Постоянно дорабатывается"</span>
				</div>
				<div className={s.logo}>
					<img className={s.logoImg} src={brother} alt="Логотип"/>
				</div>
			</header>
		</div>
	)
};

