import { useEffect, useState } from "react";
import {
  fetchGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "./api";
import GoalCard from "./components/GoalCard";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import OverviewPanel from "./components/OverviewPanel";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleCreate = async (goalData) => {
    const newGoal = await createGoal(goalData);
    setGoals([...goals, newGoal]);
  };

  const handleUpdate = async (id, updates) => {
    const updatedGoal = await updateGoal(id, updates);
    setGoals(goals.map(g => g.id === id ? updatedGoal : g));
  };

  const handleDelete = async (id) => {
    await deleteGoal(id);
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Smart Goal Planner</h1>
      <OverviewPanel goals={goals} />
      <GoalForm onCreate={handleCreate} />
      <DepositForm goals={goals} onDeposit={handleUpdate} />
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
