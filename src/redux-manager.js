import { useEffect, useState } from 'react';
import { store } from './store';

// Подписываем React-компонент на изменения Redux Store.
export const useReduxState = () => {
	const [state, setState] = useState(store.getState);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return unsubscribe;
	}, []);

	return state;
};

// Возвращаем стандартный dispatch из Redux.
export const useDispatch = () => store.dispatch;
