import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getFoodById(arg0: any): Food {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllFoodsByTag(tag: string): Food[]{
    return tag == "Todo" ?
    this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTags():Tag[]{
    return[
      { name: 'Todo', count: 14},
      { name: 'Comida rápida', count: 5},
      { name: 'Medicamentos', count: 2},
      { name: 'Productos de aseo', count: 3},
    ]
  }

  getAll():Food[]{
    return sample_foods;
  }
}
