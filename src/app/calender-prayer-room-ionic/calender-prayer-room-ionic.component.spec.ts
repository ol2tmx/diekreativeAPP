import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderPrayerRoomIonicComponent } from './calender-prayer-room-ionic.component';

describe('CalenderPrayerRoomIonicComponent', () => {
  let component: CalenderPrayerRoomIonicComponent;
  let fixture: ComponentFixture<CalenderPrayerRoomIonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderPrayerRoomIonicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderPrayerRoomIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
