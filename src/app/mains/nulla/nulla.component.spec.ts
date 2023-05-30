import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullaComponent } from './nulla.component';

describe('NullaComponent', () => {
  let component: NullaComponent;
  let fixture: ComponentFixture<NullaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NullaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NullaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
