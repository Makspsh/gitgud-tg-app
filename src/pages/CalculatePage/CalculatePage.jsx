import React, { useState } from 'react';
import "./CalculatePage.css";
import CreditParamsSection from '../../components/CalculateSections/CreditParamsSection';
import PaymentsTable from '../../components/CalculateSections/PaymentsTable';

const CalculatePage = () => {
  const [creditParams, setCreditParams] = useState({});
  const [paymentRows, setPaymentRows] = useState([]);

  const handleParamsChange = (params) => {
    setCreditParams(params);
    console.log('Параметры:', params);
  };

  const handleRowsChange = (rows) => {
    setPaymentRows(rows);
    console.log('Данные таблицы:', rows);
  };

  return (
    <div className='calculate-container'>
      <h2 className='calculate-title'>Калькулятор</h2>
      <CreditParamsSection onParamsChange={handleParamsChange} />

      <PaymentsTable onRowsChange={handleRowsChange} />
    </div>
  );
};

export default CalculatePage;
