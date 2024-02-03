import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChuckInterface} from "./chuck.interface";

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) { }

  getChunks(): Observable<ChuckInterface> {
    return this.http.get<ChuckInterface>('https://api.chucknorris.io/jokes/random');
  }

}
