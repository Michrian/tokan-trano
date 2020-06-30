import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnfantPage } from './enfant.page';

describe('EnfantPage', () => {
  let component: EnfantPage;
  let fixture: ComponentFixture<EnfantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnfantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
