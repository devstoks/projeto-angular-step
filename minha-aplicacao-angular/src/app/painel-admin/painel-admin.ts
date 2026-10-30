
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../services/usuario';

@Component({
  selector: 'app-painel-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.css'
})
export class PainelAdm implements OnInit {
  private usuarioService = inject(Usuario);

  usuarios: any[] = [];

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (resposta) => {
        this.usuarios = resposta;
      },
      error: (erro) => {
        console.error('Erro ao buscar usuários:', erro);
      }
    });
  }
}
