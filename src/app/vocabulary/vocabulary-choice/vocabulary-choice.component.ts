import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocabulary-choice',
  templateUrl: './vocabulary-choice.component.html',
  styleUrls: ['./vocabulary-choice.component.css']
})
export class VocabularyChoiceComponent implements OnInit {

  id:number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
