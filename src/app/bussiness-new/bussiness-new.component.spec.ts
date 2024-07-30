import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessNewComponent } from './bussiness-new.component';

describe('BussinessNewComponent', () => {
  let component: BussinessNewComponent;
  let fixture: ComponentFixture<BussinessNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
