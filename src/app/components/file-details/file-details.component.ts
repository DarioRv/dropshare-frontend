import { Component, input } from '@angular/core';

@Component({
  selector: 'file-details',
  standalone: true,
  imports: [],
  templateUrl: './file-details.component.html',
  styles: ``,
})
export class FileDetailsComponent {
  public file = input.required<File>();

  getEquivalentSize(size: number): string {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024).toFixed(2)} MB`;
    } else {
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
    }
  }
}
