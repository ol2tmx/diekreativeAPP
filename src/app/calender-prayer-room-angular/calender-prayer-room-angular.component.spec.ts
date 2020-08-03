import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderPrayerRoomAngularComponent } from './calender-prayer-room-angular.component';

describe('CalenderPrayerRoomAngularComponent', () => {
  let component: CalenderPrayerRoomAngularComponent;
  let fixture: ComponentFixture<CalenderPrayerRoomAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderPrayerRoomAngularComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderPrayerRoomAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
