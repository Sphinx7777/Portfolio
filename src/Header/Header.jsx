import React from 'react'
import s from './Header.module.scss'
import brother from "../images/sfinx.jpg";


export const Header = (
	{
		menuShowStatus, setToggleShowSideBar
	}) => {

	const closeMenu = () => setToggleShowSideBar(true);

	const openMenu = () => setToggleShowSideBar(false);

	return (
		<div className={
			!menuShowStatus
				? s.headerWrapper
				: s.headerWrapper + ' ' + s.headerDisableMenu}>
			<header className={s.header}>
				<div className={s.menu}>
					{
						!menuShowStatus
							? <div className={s.toggleMenu}
										 onClick={closeMenu}>
								Скрыть меню
							</div>
							: <div className={s.toggleMenu}
										 onClick={openMenu}>
								Показать меню
							</div>
					}
				</div>
				<div>
					<h2 className={s.headTitle}>
						Тренировочный проект
					</h2>
					<span>
						"Ссылка на новую версию и резюме в меню"
					</span>
				</div>
				<div className={s.logo}>
					<img className={s.logoImg}
							 src={brother}
							 alt="Логотип"/>
				</div>
			</header>
		</div>
	)
};

