import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Ping} from './ping';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(private http: HttpClient) {
  }

  ping(): Observable<Ping> {
    return this.http.get<Ping>('http://localhost:8080/ping');
  }

  pingAsOwner(): Observable<Ping> {
    return this.http.get<Ping>('http://localhost:8080/ping/as-owner');
  }
}
