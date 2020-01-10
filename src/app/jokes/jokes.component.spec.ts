import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesComponent } from './jokes.component';
import { ChuckService } from '../chuck.service';
import { of } from 'rxjs';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesComponent ],
      providers: [
        {provide: ChuckService, useClass: MockChuck}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display joke', () => {
    let element = fixture.debugElement.nativeElement;
    expect(element.querySelector('#joke').textContent.trim()).toEqual('test joke 1')
  })
});

class MockChuck {
  getJoke(): any {
    let data = {
      value: {
        joke: 'test joke 1',
        categories: ['test']
      }
    }
    
    return of(data);
  }
}