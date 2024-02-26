import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotosComponent } from './user-photos.component';

describe('UserPhotosComponent', () => {
  let component: UserPhotosComponent;
  let fixture: ComponentFixture<UserPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
