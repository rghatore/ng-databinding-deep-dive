import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None // we can use this to remove encapsulation
})
export class ServerElementComponent implements OnInit {
  // @Input() element: {type: string, name: string, content: string};
  @Input('srvElement') element: {type: string, name: string, content: string};
  // ^ alternate way to bind - but now you'll have to bind to property srvElement (element won't work)

  constructor() { }

  ngOnInit(): void {
  }

}
