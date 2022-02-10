import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Fruit } from "./fruit.model";

@Injectable()
export class DataStorageService{

    constructor(private http: HttpClient) { }

    fetchFruits() {
        return this.http.get<Fruit[]>('http://localhost:1234/api/fruits');
    }
}