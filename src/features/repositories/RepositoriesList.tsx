import { useState } from "react";

export const RepositoriesList = () => {

    const [term,setTerm] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    }    

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return <div>
        <h1>Search for a NPM package.</h1>

        <form onSubmit={onSubmit}>
            <input type='text' value={term} onChange={onChange}/>
            <button value="button">Search</button>
        </form>
    </div>
}