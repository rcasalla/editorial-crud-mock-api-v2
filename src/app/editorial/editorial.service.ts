import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Editorial } from "./editorial";

@Injectable({ providedIn: "root" })
export class EditorialService {
  private editorialesUrl = "api/editorials"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  /** GET editoriales from the server */
  getEditorials(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.editorialesUrl);
  }

  /** GET editorial by id. Will 404 if id not found */
  getEditorialDetail(id: number): Observable<Editorial> {
    const url = `${this.editorialesUrl}/${id}`;
    return this.http.get<Editorial>(url);
  }
  /** POST: add a new editorial to the server */
  createEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(this.editorialesUrl, editorial, this.httpOptions).pipe(tap((editorial: Editorial) => console.log(`added editorial w/ ${editorial.name} id=${editorial.id}`)));
  }

  /** DELETE: delete the editorial from the server */
  deleteEditorial(editorial: Editorial | number): Observable<Editorial> {
    const id = typeof editorial === "number" ? editorial : editorial.id;
    const url = `${this.editorialesUrl}/${id}`;

    return this.http.delete<Editorial>(url, this.httpOptions);
  }

  /** PUT: update the editorial on the server */
  updateEditorial(editorial: Editorial): Observable<any> {
    return this.http.put(this.editorialesUrl, editorial, this.httpOptions);
  }
}
