import { useState } from "react";

function GoalForm({ onCreate }) {
  const [formData, setFormData] = useState({
    name: "", category: "", deadline: "", targetAmount: 0,
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0]
    };
    onCreate(newGoal);
    setFormData({ name: "", category: "", deadline: "", targetAmount: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
import React from "react";
import { useState } from "react";