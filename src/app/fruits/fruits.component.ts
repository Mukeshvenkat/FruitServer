import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Fruit } from '../fruit.model';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }
  fruits: Fruit[] = [];

  ngOnInit(): void {
    this.dataStorageService.fetchFruits().subscribe(fruits => {
      this.fruits = fruits;
      console.log(typeof fruits);
      console.log("Fruits", fruits['Apple']);
    });
  }

}
