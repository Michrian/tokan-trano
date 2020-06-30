import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TachesPage } from './taches.page';

describe('TachesPage', () => {
  let component: TachesPage;
  let fixture: ComponentFixture<TachesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TachesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
