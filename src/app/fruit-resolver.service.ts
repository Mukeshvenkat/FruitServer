import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "./data-storage.service";
import { Fruit } from "./fruit.model";
import { FruitService } from "./fruit.service";

@Injectable()
export class FruitsResolverService implements Resolve<Fruit[]>{
    constructor(private dataStorageService: DataStorageService, private fruitService: FruitService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const fruits = this.fruitService.getFruits();
        if (fruits.length === 0) {
            let fruitsSub = this.dataStorageService.fetchFruits(); 
            console.log(fruitsSub);
            return fruitsSub
        } else {
            return fruits;
        }
    }
}