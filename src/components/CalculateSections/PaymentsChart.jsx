import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';

const PaymentsChart = ({ paymentRows }) => {
  // Собираем уникальные даты и сортируем
  const timeline = Array.from(new Set(paymentRows
    .filter(r => r.date)
    .map(r => r.date)
  )).sort((a, b) => {
    const [da, ma] = a.split('.').map(Number);
    const [db, mb] = b.split('.').map(Number);
    return ma - mb || da - db;
  });

  // Месяцы для ReferenceLine
  const months = Array.from(new Set(timeline.map(d => d.split('.')[1])));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && label) {
      return (
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '6px 10px',
          borderRadius: 4,
        }}>
          <strong>{label}</strong>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 250, marginTop: 40 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={timeline.map(d => ({ date: d }))}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#555" />

          <XAxis
            dataKey="date"
            type="category"
            tick={{ fill: 'white', fontSize: 12 }}
            axisLine={{ stroke: 'white' }}
          />

          <YAxis hide domain={[0, 1.5]} />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'white', strokeWidth: 1 }} />

          {/* Белые вертикальные полоски — разделители месяцев */}
          {months.map((month, idx) => {
            const firstDate = timeline.find(d => d.split('.')[1] === month);
            return firstDate ? (
              <ReferenceLine key={idx} x={firstDate} stroke="white" strokeOpacity={0.2} />
            ) : null;
          })}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentsChart;
