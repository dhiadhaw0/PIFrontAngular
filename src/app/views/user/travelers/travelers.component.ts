import { Component, TemplateRef, inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

export enum TypeCompteBancaire {
  COURANT = 'COURANT',
  EPARGNE = 'EPARGNE',
  PROFESSIONNEL = 'PROFESSIONNEL'
}

interface CompteBancaire {
  idCompte: number;
  IBAN: string;
  rib: string;
  codeBanque: string;
  solde: number;
  devise: string;
  typeCompteBancaire: TypeCompteBancaire;
}

@Component({
  selector: 'app-bank-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './travelers.component.html',
  styleUrls: ['./travelers.component.scss']
})
export class TravelersComponent {
  private modalService = inject(NgbModal)
  
  // Expose enum to template
  protected TypeCompteBancaire = TypeCompteBancaire;
  
  comptesBancaires: CompteBancaire[] = [
    {
      idCompte: 1,
      IBAN: 'FR76 3000 1007 1234 5678 9012 345',
      rib: '30001 00712 34567890123 45',
      codeBanque: '30001',
      solde: 15420.50,
      devise: 'EUR',
      typeCompteBancaire: TypeCompteBancaire.COURANT
    },
    {
      idCompte: 2,
      IBAN: 'FR76 3000 1007 9876 5432 1098 765',
      rib: '30001 00798 76543210987 65',
      codeBanque: '30001',
      solde: 45750.75,
      devise: 'EUR',
      typeCompteBancaire: TypeCompteBancaire.EPARGNE
    }
  ];

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  formatIBAN(iban: string): string {
    return iban.replace(/(.{4})/g, '$1 ').trim();
  }

  formatRIB(rib: string): string {
    return rib.replace(/(.{5})/g, '$1 ').trim();
  }

  getAccountTypeLabel(type: TypeCompteBancaire): string {
    switch (type) {
      case TypeCompteBancaire.COURANT:
        return 'Current Account';
      case TypeCompteBancaire.EPARGNE:
        return 'Savings Account';
      case TypeCompteBancaire.PROFESSIONNEL:
        return 'Professional Account';
      default:
        return 'Unknown Account Type';
    }
  }

  getAccountIcon(type: TypeCompteBancaire): string {
    switch (type) {
      case TypeCompteBancaire.COURANT:
        return 'bi-wallet2';
      case TypeCompteBancaire.EPARGNE:
        return 'bi-piggy-bank';
      case TypeCompteBancaire.PROFESSIONNEL:
        return 'bi-briefcase';
      default:
        return 'bi-bank';
    }
  }
}
