import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { UiBase } from "./components/ui-base/ui-base";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, UiBase, CertificadoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
