import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

 @Input() visible = false;
 @Input() notFoundMessage: string = "Este producto no se encuentra disponible";
 @Input() resetLinkText: string = "Regresar a la página principal";
 @Input() resetLinkRoute: string ="/home";

  constructor() { }

  ngOnInit(): void {

  }

}
