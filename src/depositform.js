import { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find(g => g.id === goalId);
    if (goal) {
      onDeposit(goalId, { savedAmount: Number(goal.savedAmount) + Number(amount) });
      setGoalId("");
      setAmount(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(g => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
