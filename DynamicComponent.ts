import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'dynamic-component',
  template: `
 <div class="card card-block">
   <h4 class="card-title">Dynamic-Component</h4>
   <p class="card-text">I am dynamically created component.
   Don't forget to add me to EntryComponents in ngModule!</p>
 </div>`
})
export class DynamicComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Dynamic Component has been initialized')
  }

  callMeFromParent(): void {
    console.log('Hello, i am method of dynamic component')
  }

  ngOnDestroy(): void {
    console.log('I have been destroyed!');
  }
}
