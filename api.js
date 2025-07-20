const BASE_URL = "http://localhost:3000/goals";

export const fetchGoals = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createGoal = async (goal) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return res.json();
};

export const updateGoal = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const deleteGoal = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
