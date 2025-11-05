import React, { useState } from 'react';
import './CreditParamsSection.css';

const CreditParamsSection = ({ onParamsChange }) => {
  const [params, setParams] = useState({
    currentDate: '',
    interestRate: '',
    creditLimit: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let validValue = value;

    // Валидация по типу поля
    if (name === 'currentDate') {
      // Разрешаем только формат ДД.ММ
      validValue = value.replace(/[^0-9.]/g, '').slice(0, 5);
    } else if (name === 'interestRate') {
      // Только числа и точка
      validValue = value.replace(/[^0-9.]/g, '');
    } else if (name === 'creditLimit') {
      // Только цифры
      validValue = value.replace(/\D/g, '');
    }

    const newParams = { ...params, [name]: validValue };
    setParams(newParams);

    // Передаём обновлённые данные родителю (CalculatePage)
    if (onParamsChange) {
      onParamsChange(newParams);
    }
  };

  return (
    <div className="credit-params">
      <div className="param-block">
        <label>текущая дата</label>
        <input
          type="text"
          name="currentDate"
          value={params.currentDate}
          onChange={handleChange}
          placeholder="ДД.ММ"
        />
      </div>

      <div className="param-block">
        <label>% ставка</label>
        <input
          type="text"
          name="interestRate"
          value={params.interestRate}
          onChange={handleChange}
          placeholder="36.6%"
        />
      </div>

      <div className="param-block">
        <label>лимит по кредиту</label>
        <input
          type="text"
          name="creditLimit"
          value={params.creditLimit}
          onChange={handleChange}
          placeholder="20000"
        />
      </div>
    </div>
  );
};

export default CreditParamsSection;
