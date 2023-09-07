import React from 'react';
import SearchIcon from '../../assets/search.svg';
import { handleResultKeyDown } from '../../utils/KeyDown';
import styles from './SearchResults.module.scss';

interface SearchResultsProps {
	searchResults: any[];
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
	return (
		<div className={styles.container}>
			{showRecommendations ? <span className={styles.subTitle}>추천 검색어</span> : ''}
			{showRecommendations && searchResults.length === 0 ? (
				<div className={styles.nolist}>검색어 없음</div>
			) : (
				searchResults.slice(0, 7).map((result, index) => (
					<div
						key={index}
						className={`${styles.resultItem} ${focusedIndex === index ? styles.focusedItem : ''}`}
						tabIndex={0}
						onKeyDown={e =>
							handleResultKeyDown(
								e,
								index,
								searchResults,
								inputRef,
								result,
								setFocusedIndex,
								setInput,
							)
						}
						onClick={() => {
							setInput(result.sickNm);
						}}
						ref={ref => (resultRefs.current[index] = ref)}
					>
						<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
						<div className={styles.text}>{' ' + result.sickNm}</div>
					</div>
				))
			)}
		</div>
	);
}
