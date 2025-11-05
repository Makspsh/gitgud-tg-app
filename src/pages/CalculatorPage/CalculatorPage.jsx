import React, { useState } from 'react';
import "./CalculatorPage.css";
import CreditParamsSection from '../../components/CalculatorSections/CreditParamsSection';
import PaymentsTable from '../../components/CalculatorSections/PaymentsTable';

import WaitImage from "../../assets/wait-img.webp"

const calculatorPage = () => {
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
    <div className='calculator-container'>
      <h2 className='calculator-title'>Калькулятор</h2>
      <CreditParamsSection onParamsChange={handleParamsChange} />

      <PaymentsTable onRowsChange={handleRowsChange} />

      <img src={WaitImage} alt="" />
    </div>
  );
};

export default calculatorPage;
