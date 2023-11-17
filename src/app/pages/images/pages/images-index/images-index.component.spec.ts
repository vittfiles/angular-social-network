import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesIndexComponent } from './images-index.component';

describe('ImagesIndexComponent', () => {
  let component: ImagesIndexComponent;
  let fixture: ComponentFixture<ImagesIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesIndexComponent]
    });
    fixture = TestBed.createComponent(ImagesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
