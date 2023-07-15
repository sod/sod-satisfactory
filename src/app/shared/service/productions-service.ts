import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {ItemPackage} from '../entities/item-package';
import {Production} from '../entities/production';
import {PersistAppService} from './persist-app.service';

@Injectable({providedIn: 'root'})
export class ProductionsService {
    tick$ = new BehaviorSubject<void>(undefined);
    productions$ = this.persistAppService.getAll(this.tick$).pipe(
        map((all) =>
            all.map((one) => {
                const uuid = one.planner.uuid;
                const productions = one.planner.productions.map((production, index) => new Production(production, index));
                const outputs = productions.reduce((outputs, next) => outputs.concat(...next.recipe.outputs), [] as ItemPackage[]);

                return {uuid, productions, outputs};
            }),
        ),
    );

    constructor(private persistAppService: PersistAppService) {}

    public update(): void {
        this.tick$.next();
    }
}
