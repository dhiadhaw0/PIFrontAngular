import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { TransactionService } from '../../../services/transaction.service'
import { Transaction } from '../../../models/transaction.model'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

type ActionType = 'send' | 'receive' | 'transfer' | 'payment' | 'bills' | 'savings'
type TransactionType = Transaction['type'] // Use the type from Transaction interface

interface TransactionFilter {
  type: string
  label: string
  icon: string
}

@Component({
  selector: 'app-transactions-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkTheme = false
  isAuthenticated = true
  balance = 25000
  activeModal: ActionType | null = null
  actionForm: FormGroup = this.initializeForm()
  recentTransactions: Transaction[] = []
  filteredTransactions: Transaction[] = []
  currentFilter = 'all'

  transactionFilters: TransactionFilter[] = [
    { type: 'all', label: 'All Transactions', icon: 'bi bi-grid' },
    { type: 'send', label: 'Sent', icon: 'bi bi-send' },
    { type: 'receive', label: 'Received', icon: 'bi bi-download' },
    { type: 'transfer', label: 'Transfers', icon: 'bi bi-arrow-left-right' },
    { type: 'payment', label: 'Payments', icon: 'bi bi-credit-card' },
    { type: 'bills', label: 'Bills', icon: 'bi bi-receipt' },
    { type: 'savings', label: 'Savings', icon: 'bi bi-piggy-bank' }
  ]

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.loadTransactions()
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      recipient: [''],
      paymentMethod: ['wallet'],
      bankAccount: [''],
      billType: [''],
      paymentFor: [''],
      goalName: [''],
      targetAmount: [''],
      monthlyContribution: ['']
    })
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe(
      (transactions: Transaction[]) => {
        this.recentTransactions = transactions
        this.filterTransactions(this.currentFilter)
      },
      (error: any) => {
        console.error('Error loading transactions:', error)
      }
    )
  }

  filterTransactions(type: string): void {
    this.currentFilter = type
    
    if (type === 'all') {
      this.filteredTransactions = [...this.recentTransactions]
    } else {
      this.filteredTransactions = this.recentTransactions.filter(tx => tx.type === type as TransactionType)
    }
  }

  openActionModal(type: ActionType): void {
    this.activeModal = type
    this.actionForm.reset({
      paymentMethod: 'wallet'
    })

    // Reset all validators first
    Object.keys(this.actionForm.controls).forEach(key => {
      this.actionForm.get(key)?.clearValidators()
    })

    // Set required validators based on modal type
    switch (type) {
      case 'send':
        this.actionForm.get('recipient')?.setValidators([Validators.required])
        this.actionForm.get('amount')?.setValidators([Validators.required, Validators.min(0)])
        this.actionForm.get('description')?.setValidators([Validators.required])
        break
      case 'transfer':
        this.actionForm.get('bankAccount')?.setValidators([Validators.required])
        this.actionForm.get('amount')?.setValidators([Validators.required, Validators.min(0)])
        break
      case 'payment':
        this.actionForm.get('paymentFor')?.setValidators([Validators.required])
        this.actionForm.get('amount')?.setValidators([Validators.required, Validators.min(0)])
        this.actionForm.get('paymentMethod')?.setValidators([Validators.required])
        break
      case 'bills':
        this.actionForm.get('billType')?.setValidators([Validators.required])
        this.actionForm.get('amount')?.setValidators([Validators.required, Validators.min(0)])
        break
      case 'savings':
        this.actionForm.get('goalName')?.setValidators([Validators.required])
        this.actionForm.get('targetAmount')?.setValidators([Validators.required, Validators.min(0)])
        this.actionForm.get('monthlyContribution')?.setValidators([Validators.required, Validators.min(0)])
        break
    }

    // Update validators
    Object.keys(this.actionForm.controls).forEach(key => {
      const control = this.actionForm.get(key)
      control?.updateValueAndValidity()
    })
  }

  closeModal(): void {
    this.activeModal = null
  }

  getModalIcon(): string {
    switch (this.activeModal) {
      case 'send':
        return 'bi bi-send'
      case 'receive':
        return 'bi bi-download'
      case 'transfer':
        return 'bi bi-arrow-left-right'
      case 'payment':
        return 'bi bi-credit-card'
      case 'bills':
        return 'bi bi-receipt'
      case 'savings':
        return 'bi bi-piggy-bank'
      default:
        return 'bi bi-question-circle'
    }
  }

  getModalTitle(): string {
    switch (this.activeModal) {
      case 'send':
        return 'Send Money'
      case 'receive':
        return 'Receive Money'
      case 'transfer':
        return 'Bank Transfer'
      case 'payment':
        return 'Make Payment'
      case 'bills':
        return 'Pay Bills'
      case 'savings':
        return 'Savings Goals'
      default:
        return ''
    }
  }

  getTransactionIcon(type: TransactionType): string {
    switch (type) {
      case 'deposit':
      case 'receive':
        return 'bi bi-arrow-down-circle-fill'
      case 'withdraw':
      case 'send':
        return 'bi bi-arrow-up-circle-fill'
      case 'transfer':
        return 'bi bi-arrow-left-right'
      case 'payment':
        return 'bi bi-credit-card-fill'
      case 'bills':
        return 'bi bi-receipt'
      case 'savings':
        return 'bi bi-piggy-bank'
      default:
        return 'bi bi-question-circle-fill'
    }
  }

  submitAction(): void {
    if (this.actionForm.valid && this.activeModal) {
      const formData = this.actionForm.value
      const transaction: Partial<Transaction> = {
        amount: formData.amount,
        description: formData.description || this.getDefaultDescription(this.activeModal, formData),
        type: this.activeModal as TransactionType,
        date: new Date(),
        status: 'completed'
      }

      if (this.activeModal === 'send' || this.activeModal === 'transfer') {
        transaction.recipient = formData.recipient
      }

      if (this.activeModal === 'payment') {
        transaction.paymentMethod = formData.paymentMethod
      }

      this.transactionService.createTransaction(transaction).subscribe(
        (newTransaction: Transaction) => {
          this.recentTransactions = [newTransaction, ...this.recentTransactions]
          this.filterTransactions(this.currentFilter)
          this.updateBalance(newTransaction)
          this.closeModal()
        },
        (error: any) => {
          console.error('Error creating transaction:', error)
        }
      )
    }
  }

  private getDefaultDescription(type: ActionType, formData: any): string {
    switch (type) {
      case 'send':
        return `Money sent to ${formData.recipient}`
      case 'receive':
        return 'Money received'
      case 'transfer':
        return `Transfer to ${formData.bankAccount} account`
      case 'payment':
        return `Payment for ${formData.paymentFor}`
      case 'bills':
        return `${formData.billType} bill payment`
      case 'savings':
        return `Savings goal: ${formData.goalName}`
      default:
        return ''
    }
  }

  private updateBalance(transaction: Transaction): void {
    if (transaction.type === 'deposit' || transaction.type === 'receive') {
      this.balance += transaction.amount
    } else if (['withdraw', 'payment', 'send', 'bills', 'savings'].includes(transaction.type)) {
      this.balance -= transaction.amount
    }
  }
} 