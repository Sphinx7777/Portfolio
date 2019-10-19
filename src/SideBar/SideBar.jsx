import React from 'react'
import s from './SideBar.module.scss'
import {NavLink} from "react-router-dom";


export const SideBar = ({menuShowStatus, setToggleShowSideBar}) => {

	return (
		<div className={!menuShowStatus ? s.sideBarWrapper : (s.sideBarWrapper + ' ' + s.disableShow)}>
			<div className={s.sideBar}>
				<a className={s.sideBarLink} target='_blank' rel='noopener noreferrer'
					 href="https://sphinx7777.github.io/SocialNetvork">
					Проект социальной сети
				</a>
				<NavLink className={s.sideBarLink} to="/">
					ToDo приложение
				</NavLink>
				<a className={s.sideBarLink} target='_blank' rel='noopener noreferrer'
					 href="https://sphinx7777.github.io/reactTypeScript">
					ToDo v.2.0 TypeScript
				</a>
				<NavLink className={s.sideBarLink} to="/resume">
					Резюме
				</NavLink>
				<div className={s.sideBarToClose} onClick={() => {
					setToggleShowSideBar(true)
				}}>X
				</div>
			</div>
		</div>
	)
};


