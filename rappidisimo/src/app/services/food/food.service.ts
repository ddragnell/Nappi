import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getFoodById(arg0: any): Food {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == food.id) ?? new Food();
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
    return sample_tags;
  }

  getAll():Food[]{
    return sample_foods;
  }
}
