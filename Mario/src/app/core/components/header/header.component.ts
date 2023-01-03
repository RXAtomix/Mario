import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  connected !: boolean;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    localStorage.removeItem('userToken');
  }

  ngDoCheck (changes: SimpleChanges){
    this.connected = this.auth.getToken();
  }
}
