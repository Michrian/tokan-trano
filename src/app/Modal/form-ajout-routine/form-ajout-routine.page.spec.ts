import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAjoutRoutinePage } from './form-ajout-routine.page';

describe('FormAjoutRoutinePage', () => {
  let component: FormAjoutRoutinePage;
  let fixture: ComponentFixture<FormAjoutRoutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjoutRoutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAjoutRoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
