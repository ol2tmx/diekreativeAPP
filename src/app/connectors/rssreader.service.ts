import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RSSReaderService {
  targetUrl : string;
  entries: Array<any> = [];
  constructor() { }

 
}
