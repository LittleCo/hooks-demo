import React, { useEffect, useReducer } from 'react';
import isFunction from 'loadsh/isFunction'

import CharacterList from './CharacterList';
import CharacterView from './CharacterView'

import './styles.scss';
import endpoint from './endpoint';
import { Route } from 'react-router-dom';

const initialState = {
    characters: [],
    loading: true,
    error: null,
};

const fetchReducer = (state, action) => {
    if (action.type === 'LOADING') {
        return {
            characters: [],
            loading: true,
            error: null,
        };
    }

    if (action.type === 'RESPONSE_COMPLETE') {
        return {
            characters: action.payload.characters,
            loading: false,
            error: null,
        };
    }

    if (action.type === 'ERROR') {
        return {
            characters: [],
            loading: false,
            error: action.payload.error,
        };
    }

    return state;
};

async function fetchCharacters(url, dispatch) {
    dispatch({ type: 'LOADING' });
    try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'RESPONSE_COMPLETE', payload: { characters: data.characters } });
    } catch (error) {
        dispatch({ type: 'ERROR', payload: { error } });
    }
}


const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetchCharacters(endpoint + '/characters', dispatch)
    }, [])

    const enhancedDispatch = React.useCallback(action => {
        console.log(action);

        if (isFunction(action)) {
            action(dispatch)
        } else {
            dispatch(action)
        }

    }, [dispatch])

    return [state, enhancedDispatch]
}

const Application = () => {
    const [state, dispatch] = useThunkReducer(fetchReducer, initialState);
    console.log(state)
    const { characters, loading, error } = state;

    return (
        <div className="Application">
            <header>
                <h1>Star Wars Characters</h1>
            </header>
            <main>
                <section className="sidebar">
                    {loading ? (
                        <p>Loading…</p>
                    ) : (
                            <CharacterList characters={characters} />
                        )}
                    {error && <p className="error">{error.message}</p>}
                </section>
                <section className='CharacterView'>
                    <Route path='/characters/:id' component={CharacterView} />
                </section>
            </main>
        </div>
    );
};

export default Application;
