import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseMessageComponent } from './advertise-message.component';

describe('AdvertiseMessageComponent', () => {
  let component: AdvertiseMessageComponent;
  let fixture: ComponentFixture<AdvertiseMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiseMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
