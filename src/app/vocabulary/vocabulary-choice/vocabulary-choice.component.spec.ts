import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyChoiceComponent } from './vocabulary-choice.component';

describe('VocabularyChoiceComponent', () => {
  let component: VocabularyChoiceComponent;
  let fixture: ComponentFixture<VocabularyChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
