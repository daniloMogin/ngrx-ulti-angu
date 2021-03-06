import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

// toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
    constructor() {}
}
export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any) {}
}
export class LoadToppingsuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]) {}
}

// visualise
export const VISUALISE_TOPPINGS = '[Products] Visualise toppings';

export class VisualiseToppings implements Action {
    readonly type = VISUALISE_TOPPINGS;
    constructor(public payload: number[]) {}
}

// action types
export type ToppingsAction =
    | LoadToppings
    | LoadToppingsFail
    | LoadToppingsuccess
    | VisualiseToppings;
