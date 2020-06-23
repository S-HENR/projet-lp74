import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocabulary-quiz',
  templateUrl: './vocabulary-quiz.component.html',
  styleUrls: ['./vocabulary-quiz.component.css']
})
export class VocabularyQuizComponent implements OnInit {

  id:number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
