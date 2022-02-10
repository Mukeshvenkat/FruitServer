import { Injectable } from "@angular/core";
import { Fruit } from "./fruit.model";

@Injectable()
export class FruitService{
    private fruits: Fruit[] = [];

    getFruits() {
        return this.fruits.slice();
    }
}