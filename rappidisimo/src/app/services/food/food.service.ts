import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_TAGS_URL, FOODS_URL } from 'src/app/shared/constants/urls';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  static getFoodById(arg0: any): Food {
    throw new Error('Method not implemented.');
  }

  getFoodById(foodId: string): Observable <Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllFoodsByTag(tag: string): Observable <Food[]>{
    return tag == "Todo" ?
    this.getAll() :
    this.http.get<Food[]>(FOODS_TAGS_URL + tag);
  }

  getAllTags():Observable <Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }
}
