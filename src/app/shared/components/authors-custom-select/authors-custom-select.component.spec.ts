import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsCustomSelectComponent } from './authors-custom-select.component';

describe('AuthorsCustomSelectComponent', () => {
  let component: AuthorsCustomSelectComponent;
  let fixture: ComponentFixture<AuthorsCustomSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsCustomSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsCustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
