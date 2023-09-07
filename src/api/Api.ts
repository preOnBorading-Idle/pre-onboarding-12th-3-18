import axios from 'axios';
import { getCacheByKey, setCacheByExpireTime } from '../utils/cache';

const instance = axios.create({
	baseURL: `http://localhost:4000/sick`,
});

export const getClinicalTrial = async (query: string) => {
	const cacheItem = await getCacheByKey(query);

	if (cacheItem) {
		return cacheItem;
	}

	console.info('calling api');
	const response = await instance.get(`?q=${query}`);

	setCacheByExpireTime({ key: query, value: response.data, expireTime: 24 * 60 * 60 * 1000 });
	return response.data;
};
