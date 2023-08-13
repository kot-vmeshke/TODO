const AppHeader = ({ more, done }) => {
  return (
    <div className="flex items-baseline justify-between">
      <h1 className="text-4xl font-bold text-violet-950">Todo List</h1>
      <span className="text-slate-600">{`${more} more to do, ${done} done`}</span>
    </div>
  );
};

export default AppHeader;
