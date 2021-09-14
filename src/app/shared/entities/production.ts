import {Recipe} from './recipe';

export interface Production {
    recipe: Recipe;
    modifier: number;
    note: string;
}

export function createProduction(): Production {
    return {
        recipe: {inputs: [], outputs: []},
        modifier: 1,
        note: '',
    };
}
