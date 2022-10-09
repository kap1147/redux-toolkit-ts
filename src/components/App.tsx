import { useTypedSelector } from '../app/hooks';

export const App = () => {

    const state = useTypedSelector(state => state.repositories);
    console.log(state);

    return <div>
            <h1>Search for a NPM package.</h1>
        </div>
};
