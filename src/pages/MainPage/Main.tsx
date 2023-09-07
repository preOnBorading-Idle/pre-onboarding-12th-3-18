//import styles from './Main.module.scss';
import styles from './Main2.module.scss';
import { useEffect, useRef, useState } from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';

import useDebounce from '../../hooks/useDebounce';

import { handleKeyDown } from '../../utils/KeyDown';
import handleInputChange from '../../utils/ChangeInput';
import { getClinicalTrial } from '../../api/Api';

import SearchIcon from '../../assets/search.svg';

export default function MainPage() {
	const [searchWord, setSearchWord] = useState('');
	const debouncedWord = useDebounce(searchWord, 500);

	const [recommendList, setRecommendList] = useState<any[]>([]);
	const [showRecommendations, setShowRecommendations] = useState(false);

	const [focusedIndex, setFocusedIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const resultRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const axiosSick = async () => {
			const data = await getClinicalTrial(debouncedWord);
			setRecommendList(data);
		};
		if (!debouncedWord) {
			return setRecommendList([]);
		}
		axiosSick();
	}, [debouncedWord]);

	useEffect(() => {
		resultRefs.current = Array(recommendList.length)
			.fill(null)
			.map((_, i) => resultRefs.current[i] || null);
	}, [recommendList]);

	useEffect(() => {
		if (focusedIndex >= 0 && focusedIndex < resultRefs.current.length) {
			resultRefs.current[focusedIndex]?.focus();
		}
	}, [focusedIndex]);

	return (
		<div className={styles.container}>
			<div className={styles.searchContainer}>
				<div className={styles.inputContainer}>
					<input
						className={styles.input}
						value={searchWord}
						onChange={e => handleInputChange(e, setSearchWord, setRecommendList)}
						onKeyDown={e => handleKeyDown(e, recommendList, resultRefs, setFocusedIndex, inputRef)}
						onFocus={() => setShowRecommendations(true)}
						onBlur={() => setShowRecommendations(false)}
						placeholder="검색어를 입력해주세요."
						ref={inputRef}
					></input>
					{/* <button onClick={() => fetchData(debouncedWord)}> */}
					<button>
						<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
					</button>
				</div>

				<SearchResults
					searchResults={recommendList}
					focusedIndex={focusedIndex}
					inputRef={inputRef}
					showRecommendations={showRecommendations}
					resultRefs={resultRefs}
					setFocusedIndex={setFocusedIndex}
					setInput={setSearchWord}
				/>
			</div>
		</div>
	);
}
