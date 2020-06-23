import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocabulary-lesson',
  templateUrl: './vocabulary-lesson.component.html',
  styleUrls: ['./vocabulary-lesson.component.css']
})
export class VocabularyLessonComponent implements OnInit {

  id:number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  playAudio(url: string) {
    new Audio(url).play();
  }

}
