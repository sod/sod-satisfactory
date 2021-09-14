import {ItemPackage} from './item-package';

export interface Recipe {
    inputs: ItemPackage[];
    outputs: ItemPackage[];
}
