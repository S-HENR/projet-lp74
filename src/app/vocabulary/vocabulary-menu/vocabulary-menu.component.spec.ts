import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyMenuComponent } from './vocabulary-menu.component';

describe('VocabularyMenuComponent', () => {
  let component: VocabularyMenuComponent;
  let fixture: ComponentFixture<VocabularyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
