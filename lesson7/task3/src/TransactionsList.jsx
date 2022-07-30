import React from 'react';

import Transaction from './Transaction';

import './transactions.scss';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(transaction => (
      <Transaction key={transaction.id} {...transaction} />
    ))}
  </ul>
);

export default TransactionsList;
