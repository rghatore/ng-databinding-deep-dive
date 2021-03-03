import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'test', content: 'hello, I\'m a server'}
  ];

  onServerAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({ type: 'server', ...serverData});
  }

  onBlueprintAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({ type: 'blueprint', ...serverData});
  }
}
