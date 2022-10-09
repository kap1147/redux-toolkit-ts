import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const RepositoriesList:  React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);
    console.log(data);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        searchRepositories(term);
    };

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        { error? <p>{error}</p> 
                : loading? <h4>loading!</h4> 
                        : data.length? data.map(pkg => <p>{pkg}</p>) 
                            : <p>No packages found.</p> 
        }
    </div>
}