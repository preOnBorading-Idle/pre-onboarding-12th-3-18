import React from 'react';
import { getClinicalTrial } from '../api/Api';

export async function fetchClinicalTrialData(
	query: string,
	setSearchResults: React.Dispatch<React.SetStateAction<any[]>>,
) {
	try {
		const res = await getClinicalTrial(query);
		setSearchResults(res);

		console.info('calling api');
	} catch (error) {
		console.error(error);
	}
}
