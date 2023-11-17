import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHeaderComponent } from './link-header.component';

describe('LinkHeaderComponent', () => {
  let component: LinkHeaderComponent;
  let fixture: ComponentFixture<LinkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
