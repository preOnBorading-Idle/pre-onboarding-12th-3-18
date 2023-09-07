import React from 'react';
import SearchIcon from '../../assets/search.svg';
import styles from './SearchResults.module.scss';
import { MAX_LIST_NUM } from '../../constants/constants';
import { SearchWordType } from '../../types/SearchWord.interface';

interface SearchResultsProps {
	searchResults: SearchWordType[];
	focusedIndex: number;
	inputRef: React.RefObject<HTMLInputElement | null>;
	showRecommendations: boolean;
	resultRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
	setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
	setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchResults({
	searchResults,
	focusedIndex,
	inputRef,
	showRecommendations,
	resultRefs,
	setFocusedIndex,
	setInput,
}: SearchResultsProps) {
	const handleResultKeyDown = (
		e: React.KeyboardEvent<HTMLDivElement>,
		index: number,
		result: SearchWordType,
	) => {
		const length = searchResults.length < MAX_LIST_NUM ? searchResults.length : MAX_LIST_NUM;

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			const nextIndex = (index + 1) % length;
			setFocusedIndex(nextIndex);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			const prevIndex = (index - 1 + length) % length;
			setFocusedIndex(prevIndex);
		} else if (e.key === 'Enter') {
			setInput(result.sickNm);
			inputRef.current?.focus();
		}
	};

	return (
		<div className={styles.resultsContainer}>
			{showRecommendations || searchResults.length !== 0 ? <span>추천 검색어</span> : ''}
			{showRecommendations && searchResults.length === 0 ? (
				<div className={styles.resultItem}>검색어 없음</div>
			) : (
				searchResults.slice(0, MAX_LIST_NUM).map((result, index) => (
					<div
						key={index}
						className={`${styles.resultItem} ${focusedIndex === index ? styles.focusedItem : ''}`}
						tabIndex={0}
						onKeyDown={e => handleResultKeyDown(e, index, result)}
						onClick={() => {
							setInput(result.sickNm);
						}}
						ref={ref => (resultRefs.current[index] = ref)}
					>
						<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
						{' ' + result.sickNm}
					</div>
				))
			)}
		</div>
	);
}
