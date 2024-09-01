const infoFunction = () => {
  const usage = `
  Usage :-
  $ npm run dev add "todo item"  # Add a new todo
  $ npm run dev ls in_progress || done || general               # Show todos
  $ npm run dev del id       # Delete a todo
  $ npm run dev done id      # Complete a todo
  $ npm run dev in_progress id      # in_progress a todo
  $ npm run dev help            # Show usage
  $ npm run dev in_progress           # show all in progress todos
  $ npm run dev completed           # show all completed todos`;
  console.log(usage);
};
export default infoFunction;
