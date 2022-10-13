import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector, useTypedDispatch } from "../../app/hooks";
import { searchRepositories } from "./repositoriesSlice";

export const RepositoriesList = () => {

    const dispatch = useTypedDispatch()
    const [term,setTerm] = useState('')
    const state = useTypedSelector(state => state.repositories);
    

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    }    

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(searchRepositories(term));
        console.log(state);
    }

    return <div>
        <h1>Search for a NPM package.</h1>

        <form onSubmit={onSubmit}>
            <input type='text' value={term} onChange={onChange}/>
            <button value="button">Search</button>
        </form>

        {state.loading? <p>loading...</p> : null}
    </div>
}