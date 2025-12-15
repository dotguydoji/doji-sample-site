import React, { useState, useMemo } from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const MortgageCalculator: React.FC = () => {
  const [price, setPrice] = useState('5000000');
  const [downPayment, setDownPayment] = useState('20');
  const [interestRate, setInterestRate] = useState('7.5');
  const [loanTerm, setLoanTerm] = useState('15');

  const monthlyPayment = useMemo(() => {
    const principal = parseFloat(price) * (1 - parseFloat(downPayment) / 100);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (principal > 0 && monthlyInterestRate > 0 && numberOfPayments > 0) {
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      return (principal * (numerator / denominator)).toFixed(2);
    }
    return '0.00';
  }, [price, downPayment, interestRate, loanTerm]);

  return (
    <div className="bg-theme-bg-dark p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-theme-text-primary flex items-center font-serif">
        <CalculatorIcon className="h-8 w-8 mr-3 text-theme-accent" />
        Mortgage Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-theme-text-secondary mb-1">Property Price (₱)</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-theme-text-secondary mb-1">Down Payment (%)</label>
          <input type="number" value={downPayment} onChange={e => setDownPayment(e.target.value)} className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-theme-text-secondary mb-1">Interest Rate (%)</label>
          <input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(e.target.value)} className="w-full p-3 bg-theme-bg-light rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-theme-text-secondary mb-1">Loan Term (Years)</label>
          <select value={loanTerm} onChange={e => setLoanTerm(e.target.value)} className="w-full p-3 bg-theme-bg-light rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-theme-accent">
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20">20 Years</option>
          </select>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-theme-bg-light text-center">
        <p className="text-theme-text-secondary">Estimated Monthly Payment</p>
        <p className="text-3xl font-bold text-theme-accent my-2">₱{parseFloat(monthlyPayment).toLocaleString()}</p>
        <p className="text-xs text-theme-text-secondary">*For estimation purposes only. Please consult with a bank for official computations.</p>
        <Button variant="secondary" className="mt-4 w-full">Schedule a Financial Consultation</Button>
      </div>
    </div>
  );
};

export default MortgageCalculator;