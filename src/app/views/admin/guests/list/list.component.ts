import { Component, OnInit } from '@angular/core'
import { guestsList } from './data'
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { User } from '@/app/models/user.model'
import { UserService } from '@/app/services/user.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgbNavModule,
    CommonModule,
    NgbPaginationModule,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListsComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Utilisateurs chargés :', this.users);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs :', err);
      }
    });
  }
  deleteUser(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Cette action supprimera définitivement le profil.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe({
          next: () => {
            this.users = this.users.filter(u => u.idUser !== id);
            Swal.fire(
              'Supprimé !',
              'Le profil a été supprimé avec succès.',
              'success'
            );
          },
          error: (err) => {
            console.error('Erreur suppression :', err);
            Swal.fire(
              'Erreur',
              'Une erreur est survenue lors de la suppression.',
              'error'
            );
          }
        });
      }
    });
  }
}  