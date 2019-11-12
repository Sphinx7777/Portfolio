import React, {useState} from 'react'
import s from './ToDo.module.scss'
import search3 from '../images/search3.ico'


export const SearchTask = ({searchTaskByName, searchTaskByDescription}) => {

	const [searchMode, setSearchMode] = useState(false);

	const toggleSearchMode = () => setSearchMode(!searchMode);

	const searchToName = event => searchTaskByName(event.target.value);

	const searchToDescription = event => searchTaskByDescription(event.target.value);

	const searchClose = () => setSearchMode(false);

	return (
		<div className={s.searchWrapper}>
			{
				!searchMode
					? <div className={s.search}
								 onClick={toggleSearchMode}>
						<img className={s.searchIcon}
								 src={search3}
								 alt="Открыть поисковую строку"
						/>
						Поиск
					</div>
					: <div className={s.searchWrapperContent}>
						<div>
							<input className={s.searchField}
										 placeholder='По названию'
										 onChange={searchToName}
							/>
						</div>
						<div>
							<input className={s.searchField}
										 placeholder='По описанию'
										 onChange={searchToDescription}
							/>
						</div>
						<span className={s.closeSearch}
									onClick={searchClose}>
							X
						</span>
					</div>
			}
		</div>
	)
};
