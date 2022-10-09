import { useTypedSelector } from '../hooks/useTypedSelector';

export const App = () => {

    const state = useTypedSelector(state => state);
    console.log(state);

    return <div>
            <h1>Search for a NPM package.</h1>
        </div>
};
