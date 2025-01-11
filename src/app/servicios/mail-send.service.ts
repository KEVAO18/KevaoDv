import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailSendService {

  private apiUrl = 'https://3.144.248.86/';

  constructor(private http: HttpClient) { }

  enviarCorreo(subject: string, message: string): Observable<any> {
    const body = { subject, message };
    return this.http.post(this.apiUrl, body, {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

}
