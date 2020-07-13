import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TratamientosPage } from './tratamientos.page';

describe('TratamientosPage', () => {
  let component: TratamientosPage;
  let fixture: ComponentFixture<TratamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TratamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
