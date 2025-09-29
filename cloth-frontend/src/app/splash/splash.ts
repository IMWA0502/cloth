import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  imports: [],
  templateUrl: './splash.html',
  styleUrl: './splash.css'
})
export class Splash implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Dopo 3 secondi, naviga verso la home
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}