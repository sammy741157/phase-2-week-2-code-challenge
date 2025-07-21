function OverviewPanel({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const goalsCompleted = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="overview-panel">
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {goalsCompleted}</p>
    </div>
  );
}

export default OverviewPanel;
