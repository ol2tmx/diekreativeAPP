import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderPrayerRoomPage } from './calender-prayer-room.page';

describe('CalenderPrayerRoomPage', () => {
  let component: CalenderPrayerRoomPage;
  let fixture: ComponentFixture<CalenderPrayerRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderPrayerRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderPrayerRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
