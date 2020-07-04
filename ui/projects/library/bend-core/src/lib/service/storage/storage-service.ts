import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {

  put(key: string, value: string): StorageService {
    localStorage.setItem(key, value);
    return this;
  }

  removeAll(): StorageService {
    localStorage.clear();
    return this;
  }

  get(key: string, valueIfMissing?: string): string {
    const value = localStorage.getItem(key);
    if (value === undefined || value === null) return  valueIfMissing;
    return value;
  }

  remove(key: string): StorageService {
    localStorage.removeItem(key);
    return this;
  }
}
