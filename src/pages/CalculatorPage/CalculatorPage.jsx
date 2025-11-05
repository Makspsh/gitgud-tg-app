import { useState } from 'react';
import "./CalculatorPage.css";
import CreditParamsSection from '../../components/CalculatorSections/CreditParamsSection';
import PaymentsTable from '../../components/CalculatorSections/PaymentsTable';

import WaitImage from '../../assets/wait-img.webp';
import homePageIcon from '../../assets/icons/homepage-icon.svg';

export default function CalculatorPage({ onBack }) {
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
      <div className='calculator-top'>
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <h2 className='calculator-title'>Калькулятор</h2>
      </div>

      <CreditParamsSection onParamsChange={handleParamsChange} />

      <PaymentsTable onRowsChange={handleRowsChange} />

      <img className="wait-image" src={WaitImage} alt="" />
      <p>на график не хватило энергетиков</p>
    </div>
  );
};