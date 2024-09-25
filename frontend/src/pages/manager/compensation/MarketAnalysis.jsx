import React, { useState } from 'react';

const CompensationAnalysis = () => {
  const [compensation, setCompensation] = useState({
    baseSalary: 0,
    bonus: 0,
    benefits: 0,
    total: 0,
  });

  return (
    <div>
      <h2>Compensation Analysis</h2>
      <form>
        <input type="number" name="baseSalary" placeholder="Base Salary" />
        <input type="number" name="bonus" placeholder="Bonus" />
        <input type="number" name="benefits" placeholder="Benefits" />
        <input type="number" name="total" placeholder="Total Compensation" readOnly />
      </form>
    </div>
  );
};

export default CompensationAnalysis;
