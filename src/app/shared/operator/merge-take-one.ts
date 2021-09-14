import {combineLatest, ObservableInput, OperatorFunction} from 'rxjs';
import {map, mergeMap, take} from 'rxjs/operators';

// if you need some extra values from other observables - preferably synchronous like ngrx state
//
// Example:
//     this.action.pipe(
//         ofType(myActionType),
//         tap((myActionType) => {}),                        // <-- only has the action value
//         mergeTakeOne(this.store.select(myStoreValue), /* andAnotherObservable$, andEvenMoreObservables$ */),
//         tap(([myActionType, myStoreValue]) => {}),        // <-- has both, the action value and the value from the store observable
//

function isFunction(item: unknown): item is (source: unknown) => unknown {
    return typeof item === 'function';
}

export function mergeTakeOne<SOURCE, MERGE extends (ObservableInput<unknown> | ((source: SOURCE) => unknown))[]>(
    ...toBeMerged$: [...MERGE]
): OperatorFunction<
    SOURCE,
    [
        SOURCE,
        ...{
            [P in keyof MERGE]: MERGE[P] extends ObservableInput<infer FROM_OBSERVABLE>
                ? FROM_OBSERVABLE
                : MERGE[P] extends (source: SOURCE) => ObservableInput<infer FROM_FUNCTION>
                ? FROM_FUNCTION
                : never;
        }
    ]
> {
    return mergeMap((source) =>
        combineLatest(toBeMerged$.map((item) => (isFunction(item) ? item(source) : item))).pipe(
            take(1),
            map((source2): any => [source, ...source2]),
        ),
    );
}
