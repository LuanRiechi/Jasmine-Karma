import { Component } from '@angular/core';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LikeWidgetComponent],
})
export class AppComponent {
  title = 'Angular testing';
  public likes = 0;

  public like(): void {
    this.likes++;
  }
}
