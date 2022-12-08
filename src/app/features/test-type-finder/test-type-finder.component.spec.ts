import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTypeFinderComponent } from './test-type-finder.component';

describe('TestTypeFinderComponent', () => {
  let component: TestTypeFinderComponent;
  let fixture: ComponentFixture<TestTypeFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTypeFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTypeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'test-type-taxonomy-finder'`, () => {
    const fixture = TestBed.createComponent(TestTypeFinderComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-type-taxonomy-finder');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TestTypeFinderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test-type-taxonomy-finder app is running!');
  });
});
