import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  Title: string;
  @Input() cardItem1: string;
  @Input() cardItem2: string;
  @Input() cardItem3: string;


  constructor() { }

  ngOnInit(): void {
    console.log(this.Title);

  }

}
