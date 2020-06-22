import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-content',
  templateUrl: './history-content.component.html',
  styleUrls: ['./history-content.component.css']
})
export class HistoryContentComponent implements OnInit {

  id:number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  
}
