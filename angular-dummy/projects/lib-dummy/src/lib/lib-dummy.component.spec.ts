import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDummyComponent } from './lib-dummy.component';

describe('LibDummyComponent', () => {
  let component: LibDummyComponent;
  let fixture: ComponentFixture<LibDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibDummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
