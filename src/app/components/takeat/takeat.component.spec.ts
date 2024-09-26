import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeatComponent } from './takeat.component';

describe('TakeatComponent', () => {
  let component: TakeatComponent;
  let fixture: ComponentFixture<TakeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
