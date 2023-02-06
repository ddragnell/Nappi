import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm :String = "";

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.searchTerm = params.searchTerm;
    })
  }
  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
