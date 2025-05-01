export interface Transaction {
  id: number;
  type: 'deposit' | 'withdraw' | 'transfer' | 'payment' | 'send' | 'receive' | 'bills' | 'savings';
  amount: number;
  description: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  recipient?: string;
  paymentMethod?: 'wallet' | 'card';
  securityCode?: string;
  billType?: 'utility' | 'internet' | 'phone' | 'other';
  bankAccount?: 'savings' | 'checking';
  goalName?: string;
  targetAmount?: number;
  monthlyContribution?: number;
} 