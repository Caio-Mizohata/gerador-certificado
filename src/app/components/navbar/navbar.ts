import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router)

  redirecionarParaHome() {
    this.router.navigateByUrl("/")
  }

  redirecionarParaNovoCertificado() {
    this.router.navigateByUrl("/certificados/novo")
  }
  
}
