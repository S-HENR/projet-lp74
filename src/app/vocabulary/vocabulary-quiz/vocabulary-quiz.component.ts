import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocabulary-quiz',
  templateUrl: './vocabulary-quiz.component.html',
  styleUrls: ['./vocabulary-quiz.component.css']
})
export class VocabularyQuizComponent implements OnInit {

  id:number;
  modal_success;
  modal_error;
  close_button;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.modal_success = document.getElementById('successModal');
    this.modal_error = document.getElementById('errorModal');
    this.close_button = document.getElementById('close');
  }

  toggleModal(id_modal: string) {
    if(id_modal == "successModal")
      if(this.modal_success.style.display == "none")
        this.modal_success.style.display = "block";
      else
        this.modal_success.style.display = "none";
    if(id_modal == "errorModal")
      if(this.modal_error.style.display == "none")
        this.modal_error.style.display = "block";
      else
        this.modal_error.style.display = "none";
  }

}
