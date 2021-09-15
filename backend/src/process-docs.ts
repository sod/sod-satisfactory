import * as fs from 'fs';
import parseDocs from 'satisfactory-docs-parser';
import {ItemInfo} from 'satisfactory-docs-parser/dist/parsers/parseItems';
import {ItemRecipeInfo} from 'satisfactory-docs-parser/dist/parsers/parseRecipes';

const file = fs.readFileSync('resources/update4/CommunityResources/Docs/docs.json');
const rawData = parseDocs(file);

function getItemNameMap(docs: ReturnType<typeof parseDocs>): Map<string, string> {
    const rawItems: [string: 'ItemId', ItemRecipeInfo: ItemInfo][] = Object.entries(docs.items) as any;

    return new Map(rawItems.map(([itemId, item]) => [itemId, item.name]));
}

function getAmount(item: {quantity: number}, recipe: {craftTime: number}): number {
    return +((item.quantity * 60) / recipe.craftTime).toFixed(2);
}

function getRecipes(docs: ReturnType<typeof parseDocs>) {
    const itemNameMap = getItemNameMap(rawData);
    const getItemName = (itemClass: string): string => itemNameMap.get(itemClass) ?? itemClass;
    const rawRecipes: [string: 'RecipeId', ItemRecipeInfo: ItemRecipeInfo][] = Object.entries(docs.itemRecipes) as any;
    const recipes = rawRecipes
        .filter(([_, recipe]) => recipe.machineCraftable)
        .map(([name, recipe]) => ({
            name,
            inputs: recipe.ingredients.map((input) => ({itemName: getItemName(input.itemClass), amount: getAmount(input, recipe)})),
            outputs: recipe.products.map((input) => ({itemName: getItemName(input.itemClass), amount: getAmount(input, recipe)})),
        }));

    return recipes;
}

const recipesData = getRecipes(rawData);

// fs.writeFileSync('parsed-docs-dump.json', JSON.stringify(data));
// console.log(...recipes.slice(0, 5));

const disclaimer = '// this file is generated via bin/process-docs';
const exportedData = 'export const recipesData = ' + JSON.stringify(recipesData, null, 4);

fs.writeFileSync('src/app/generated/recipes-data.ts', [disclaimer, exportedData].join('\n\n'), {encoding: 'utf-8'});

export {};
