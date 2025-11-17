import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  tituloHeader = 'Youtube Atualizado';

  valorInput = 'valor Inicial';

  atualizarTitulo(){
    console.log(this.valorInput);
  }
}
