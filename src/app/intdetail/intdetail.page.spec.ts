import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntdetailPage } from './intdetail.page';

describe('IntdetailPage', () => {
  let component: IntdetailPage;
  let fixture: ComponentFixture<IntdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
