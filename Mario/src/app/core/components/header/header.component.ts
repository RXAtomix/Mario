import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Mario } from '../../models/mario.model';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  connected !: boolean;
  name !: string;
  role !: string;
  @Input() mario!: Mario;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    localStorage.removeItem('userToken');
    this.connected = false;
  }

  ngDoCheck (changes: SimpleChanges){
    this.connected = this.auth.getToken();
    //this.name = this.mario.name;
    //this.role = this.mario.role;
  }

  disconnectUser(){

  }
}
