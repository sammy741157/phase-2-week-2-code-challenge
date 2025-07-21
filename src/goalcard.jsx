function GoalCard({ goal, onUpdate, onDelete }) {
  const {
    id, name, category, deadline, targetAmount, savedAmount
  } = goal;

  const percent = Math.min(100, (savedAmount / targetAmount) * 100).toFixed(1);
  const remaining = targetAmount - savedAmount;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));

  const overdue = daysLeft < 0 && savedAmount < targetAmount;
  const warning = daysLeft <= 30 && daysLeft >= 0 && savedAmount < targetAmount;
  const complete = savedAmount >= targetAmount;

  return (
    <div className="goal-card">
      <h3>{name} {complete && "✅"} {overdue && "⚠️ Overdue"}</h3>
      <p>Category: {category}</p>
      <p>Deadline: {deadline} ({daysLeft} days left)</p>
      <p>Saved: ${savedAmount} / ${targetAmount} ({percent}%)</p>
      <div className="progress-bar">
        <div style={{ width: `${percent}%` }} className="progress-fill" />
      </div>
      {warning && <p className="warning">⚠️ Less than 30 days left!</p>}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default GoalCard;

