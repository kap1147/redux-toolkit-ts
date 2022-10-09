import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
	loading: boolean;
	error: string | null;
        data: string[]
}

const initialState: SliceState = {
	loading: false,
	error: null,
	data: []
}

export const repositoriesSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {
		search_repositories: (state) => {state.loading = true;},
	}
})

export const { search_repositories } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
