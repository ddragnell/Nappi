import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit{

  tags?:Tag[];
  constructor(private foodService:FoodService){
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }


  ngOnInit(): void {

  }
}
