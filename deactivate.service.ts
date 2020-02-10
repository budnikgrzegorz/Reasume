import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeactivateService {
  @Output() isDeactivate = false;

  constructor() { }
}
