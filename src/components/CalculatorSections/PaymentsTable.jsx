import React, { useState, useEffect } from 'react';
import './PaymentsTable.css';

const PaymentsTable = ({ onRowsChange }) => {
  const [rows, setRows] = useState([
    { date: '', payment: '', purchase: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    if (field === 'date') {
      value = value.replace(/[^0-9.]/g, '').slice(0,5);
    } else if (field === 'payment' || field === 'purchase') {
      value = value.replace(/\D/g, '');
    }
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { date: '', payment: '', purchase: '' }]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows.length ? newRows : [{ date: '', payment: '', purchase: '' }]);
    // Чтобы таблица не стала пустой — оставляем хотя бы одну пустую строку
  };

  // При изменении rows вызываем onRowsChange
  useEffect(() => {
    if (onRowsChange) {
      onRowsChange(rows);
    }
  }, [rows, onRowsChange]);

  return (
    <div className="payments-table-wrapper">
      <table className="payments-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Платежи</th>
            <th>Покупки</th>
            <th></th> {/* Колонка под кнопку удаления */}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <input
                  type="text"
                  value={row.date}
                  onChange={e => handleInputChange(i, 'date', e.target.value)}
                  placeholder="ДД.ММ"
                  maxLength={5}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.payment}
                  onChange={e => handleInputChange(i, 'payment', e.target.value)}
                  placeholder="Сумма"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.purchase}
                  onChange={e => handleInputChange(i, 'purchase', e.target.value)}
                  placeholder="Сумма"
                />
              </td>
              <td>
                <button
                  className="delete-row-btn"
                  onClick={() => deleteRow(i)}
                  title="Удалить строку"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-row-btn" onClick={addRow}>Добавить строку</button>
    </div>
  );
};

export default PaymentsTable;
