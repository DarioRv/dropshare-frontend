import { Component, inject, OnInit } from '@angular/core';
import { FilesService } from '@app/services/files.service';
import { UploadedFile } from '@app/interfaces/uploaded-file.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FileDetailsComponent } from '@app/components/file-details/file-details.component';

@Component({
  selector: 'app-file-download-page',
  standalone: true,
  imports: [FileDetailsComponent, RouterLink],
  templateUrl: './file-download-page.component.html',
  styles: ``,
})
export class FileDownloadPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private filesService = inject(FilesService);
  public file: UploadedFile | null = null;
  public isDownloading = false;
  public loadingFile = true;

  ngOnInit(): void {
    this.route.params.subscribe(({ slug }) => {
      this.getFile(slug);
    });
  }

  getFile(slug: string): void {
    this.filesService.get(slug).subscribe({
      next: (file) => {
        this.file = file;
        this.loadingFile = false;
      },
      error: (error) => {
        console.error(error);
        this.loadingFile = false;
      },
    });
  }

  downloadFile(): void {
    this.isDownloading = true;

    const url = this.file!.url;
    const blobFromUrl = fetch(url).then((response) => response.blob());

    blobFromUrl.then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.file!.name;
      a.click();
      URL.revokeObjectURL(url);
      this.isDownloading = false;
    });
  }
}
