import { Component, inject } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { Router } from "@angular/router";

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado {
  private router = inject(Router)

  voltarBotao() {
    this.router.navigateByUrl("/")
  }
}
