import { useTypedSelector } from '../app/hooks';
import { RepositoriesList } from '../features/repositories/RepositoriesList';

export const App = () => {

    const state = useTypedSelector(state => state.repositories);
    console.log(state);

    return <div>
            <RepositoriesList />
        </div>
};
