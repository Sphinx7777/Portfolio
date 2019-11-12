import React from 'react'
import s from './Footer.module.scss'
import lamp from '../images/lamp.ico'
import telegram from '../images/telegram.ico'
import git from '../images/git.ico'
import sfinx from '../images/sfinx.jpg'
import linkedIn from '../images/linkedIn.ico'

export const Footer = ({menuShowStatus}) => {

	return (
		<div className={
			!menuShowStatus
				? s.footerWrapper
				: s.footerWrapper + ' ' + s.footerDisableMenu}>
			<footer className={s.footer}>
				<div className={s.mail}>
					<div>
						© «Онищенко С.М.», 2019
					</div>
					<div>
						<a className={s.link}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="mailto:Spamoglot13@gmail.com">
							Пишите письма
						</a>
					</div>
				</div>

				<div className={s.LinkWrapper}>
					<div className={s.linkLineWrapper}>
						<a className={s.link}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="https://djinni.co/q/03c688fb54">
							<img className={s.linkImg}
									 src={lamp}
									 alt="Джинни"/>
							<span className={s.linkTitle}>
										 Djinni
									 </span>
						</a>
						<a className={s.link}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="https://t.me/S_f_i_n_x">
							<img className={s.linkImg}
									 src={telegram}
									 alt="Телеграм"/>
							<span className={s.linkTitle}>
										 Telegram
									 </span>
						</a>
						<a className={s.link}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="https://github.com/Sphinx7777?tab=repositories">
							<img className={s.linkImg}
									 src={git}
									 alt="Гитхаб"/>
							<span className={s.linkTitle}>
										 Git
									 </span>
						</a>
						<a className={s.link}
							 target='_blank'
							 rel='noopener noreferrer'
							 href="https://www.linkedin.com/in/onishchenkosergei/">
							<img className={s.linkImg}
									 src={linkedIn}
									 alt="Linkedin"/>
							<span className={s.linkTitle}>
										 Linkedin
									 </span>
						</a>
					</div>
				</div>
				<div className={s.photoWrapper}>
					<img className={s.photo}
							 src={sfinx}
							 alt="Brother"/>
				</div>
			</footer>
		</div>
	)
};

