import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../tipado/Character';
import { AppConfig } from 'src/app/core/configs/app.config';
import { delay } from 'rxjs/operators';

const urlBase = AppConfig.urlBase;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAll() {
    const url = `${urlBase}/users`;
    return this.http.get<IUser[]>(url).pipe(delay(3000));
  }
  getById(id: string) {
    const url = `${urlBase}/users/${id}`;
    return this.http.get<IUser>(url);
  }

  add(user: IUser) {
    const url = `${urlBase}/users`;
    return this.http.post(url, user);
  }

  update(id: string, newUser: IUser) {
    const url = `${urlBase}/users/${id}`;
    return this.http.put(url, newUser);
  }

  delete(id: string) {
    const url = `${urlBase}/users/${id}`;
    return this.http.delete(url);
  }
}
