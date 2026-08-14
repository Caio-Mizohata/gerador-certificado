import { Component, inject } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  // Pequeno exemplo de ID
  id: string = '2';
  private router = inject(Router)

  redirecionarParaCertificado() {
    this.router.navigateByUrl(`/certificados/${this.id}`)
  }
}
