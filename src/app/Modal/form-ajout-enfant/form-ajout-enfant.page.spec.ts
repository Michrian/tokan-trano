import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAjoutEnfantPage } from './form-ajout-enfant.page';

describe('FormAjoutEnfantPage', () => {
  let component: FormAjoutEnfantPage;
  let fixture: ComponentFixture<FormAjoutEnfantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjoutEnfantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAjoutEnfantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
