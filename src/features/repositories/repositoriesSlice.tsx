import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import axios from 'axios';

type RepositoriesState = {
	loading: boolean;
	error: string | null;
    data: string[]
}

const initialState: RepositoriesState = {
	loading: false,
	error: null,
	data: []
}

export const repositoriesSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {
		search_repositories(state) {
			return {loading: true, error: null, data: []}
		},
		search_repositories_success(state, action: PayloadAction<string[]>) {
			return {loading: false, error: null, data: action.payload}
		},
		search_repositories_error(state, action: PayloadAction<string>) {
			return {loading: false, error: action.payload, data: []}
		}
	},
})

export const { search_repositories, search_repositories_success, search_repositories_error } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;

enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

interface  search_repositories_interface {
	type: string;
}

interface search_repositories_success {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[]
}

interface search_repositories_error {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string
}

type Action = search_repositories_interface | search_repositories_success | search_repositories_error


export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
	dispatch(search_repositories())
	try {
		const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',{
			params: {
				text: term
			}
		})

		const names = data.objects.map((result: any) => {
			return result.package.name;
		});
		console.log('success')
		dispatch(search_repositories_success(names))

	} catch(err) {
		if (err instanceof Error) {
			dispatch(search_repositories_error(err.message))
		}
	}
    
};