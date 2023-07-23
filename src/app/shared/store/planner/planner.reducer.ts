import {createReducer, on} from '@ngrx/store';
import {pick, without} from 'lodash-es';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Production} from 'src/app/shared/entities/production';
import {productionDtoSchema} from 'src/app/shared/entities/production-dto';
import {Recipe} from 'src/app/shared/entities/recipe';
import {removeFromArray} from 'src/app/shared/function/remove-from-array';
import {z} from 'zod';
import * as PlannerActions from './planner.actions';

export const plannerFeatureKey = 'planner';

export const inputCoveredDtoSchema = z.object({
    name: z.string(),
    amount: z.number(),
});

export const plannerStateSchema = z.object({
    uuid: z.string().optional(),
    edit: z.object({index: z.number()}).optional(),
    productions: z.array(productionDtoSchema),
    inputCovered: z.array(inputCoveredDtoSchema),
});

export type InputCoveredDto = z.infer<typeof inputCoveredDtoSchema>;
export type PlannerState = z.infer<typeof plannerStateSchema>;

export const createInitialState = (): PlannerState => ({
    uuid: undefined,
    edit: undefined,
    productions: [],
    inputCovered: [],
});

export const reducer = createReducer(
    createInitialState(),

    on(PlannerActions.plannerStoreRestored, (state, action) => ({
        uuid: action.state.uuid,
        edit: action.state.edit,
        productions: action.state.productions || [],
        inputCovered: action.state.inputCovered || [],
    })),

    on(PlannerActions.plannerStoreNotFound, (state, action) => ({
        ...createInitialState(),
        uuid: action.uuid,
        ...(action.navigationId === 1 ? {} : edit([])),
    })),

    on(PlannerActions.addItemToProductionClicked, (state) => {
        const newProductions = state.productions
            .filter((production) => new Production(production, 0).hasRecipes())
            .concat(Production.createDto());

        return {
            ...state,
            ...edit(state.productions),
        };
    }),

    on(PlannerActions.addProductionWithOutputNameClicked, (state, action) => ({
        ...state,
        edit: {index: state.productions.length},
        productions: state.productions.concat(Production.createDto(action.itemPackage)),
    })),

    on(PlannerActions.removeProductionClicked, (state, {relation}) => ({
        ...state,
        edit: undefined,
        productions: without(state.productions, relation.production),
    })),

    on(PlannerActions.deleteProductionClicked, (state) => ({
        ...createInitialState(),
        uuid: state.uuid,
    })),

    on(PlannerActions.addItemPackage, (state, action) => ({
        ...state,
        productions: Recipe.update(state.productions, action.relation, (recipe) => ({
            ...recipe,
            [action.target]: recipe[action.target].concat({...ItemPackage.createDto(), ...(action.itemPackage ?? {})}),
        })),
    })),

    on(PlannerActions.updateItemPackage, (state, action) => ({
        ...state,
        productions: ItemPackage.update(state.productions, action.relation, (itemPackage) => ({
            ...itemPackage,
            ...action.itemPackage,
        })),
    })),

    on(PlannerActions.updateProductionClicked, (state, action) => ({
        ...state,
        productions: Production.update(state.productions, action.relation, (production) => ({
            ...production,
            ...action.production,
        })),
    })),

    on(PlannerActions.recipeSelected, (state, action) => ({
        ...state,
        productions: Production.update(state.productions, action.relation, (production) => ({
            ...production,
            recipe: Recipe.fromRecipeDataDto(action.recipe),
        })),
    })),

    on(PlannerActions.productionBuiltClicked, (state, action) => ({
        ...state,
        productions: Production.update(state.productions, action.relation, (production) => ({
            ...production,
            built: !production.built,
        })),
    })),

    on(PlannerActions.productionUpNextClicked, (state, action) => ({
        ...state,
        edit: undefined, // reset edit on upNext action to reduce visual noise when reordering the list
        productions: state.productions.includes(action.relation.production)
            ? [action.relation.production, ...without(state.productions, action.relation.production)]
            : state.productions,
    })),

    on(PlannerActions.removeItemPackage, (state, action) => ({
        ...state,
        productions: Recipe.update(state.productions, action.relation, (recipe) => ({
            ...recipe,
            inputs: removeFromArray(recipe.inputs, action.relation.itemPackage),
            outputs: removeFromArray(recipe.outputs, action.relation.itemPackage),
        })),
    })),

    on(PlannerActions.editProductionClicked, (state, action) => ({
        ...state,
        edit: action.index === state.edit?.index ? undefined : {index: action.index},
    })),

    on(PlannerActions.closeProductionClicked, (state) => ({
        ...state,
        edit: undefined,
    })),

    on(PlannerActions.inputCoveredClicked, (state, action) => {
        const without = state.inputCovered.filter((input) => input.name !== action.name);
        const remove = state.inputCovered.some((input) => input.name === action.name && input.amount === action.amount);

        return {
            ...state,
            inputCovered: remove ? without : without.concat(pick(action, ['name', 'amount'])),
        };
    }),
);

function edit(productions: PlannerState['productions']) {
    const newProductions = productions.filter((production) => new Production(production, 0).hasRecipes()).concat(Production.createDto());
    const state = {
        edit: {index: newProductions.length - 1},
        productions: newProductions,
    } satisfies Partial<PlannerState>;

    return state;
}
