import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UploadedFile } from '@app/interfaces/uploaded-file.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/files`;

  upload(file: File): Observable<UploadedFile> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<UploadedFile>(`${this.baseUrl}`, formData);
  }
}
