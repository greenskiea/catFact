import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatFact } from '../model/cat-fact.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  constructor(private http: HttpClient) {}

  getCatFact(limit: number): Observable<any> {
    let responseFact = this.http.get<any>(
      `https://catfact.ninja/facts?limit=${limit}`
    );

    return responseFact;
  }

  getCatImage(limit: number): Observable<any[]> {
    return this.http.get<any[]>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
  }
}

// let result: CatFact[] = [];
// let responseFact = this.http
//   .get<CatFact[]>(`https://catfact.ninja/facts?limit=${limit}`)
//   .pipe(map((data: any) => data.data));
// let responseImage = this.http.get(
//   `https://api.thecatapi.com/v1/images/search?limit=${limit}`
// );
// let promiseFact = await new Promise<CatFact[]>((resolve, reject) => {
//   responseFact.subscribe((data) => {
//     resolve(data);
//   });
// });

// let promiseImage = await new Promise<any>((resolve, reject) => {
//   responseImage.subscribe((data) => {
//     resolve(data);
//   });
// });

// let data = await Promise.all([promiseFact, promiseImage]);
// let fact: CatFact[] = data[0];
// let image: any[] = data[1];
// fact.forEach((item, index) => {
//   result.push({
//     id: item.id,
//     fact: item.fact,
//     imageURL: image[index].url,
//     length: item.length,
//   });
// });
// return result;
