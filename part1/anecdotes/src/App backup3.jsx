import { useEffect, useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [popular, setPopular] = useState(-1);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const changeAnectote = () => {
    const calcAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(calcAnecdote);
  };

  const addVote = (sel) => {
    const newVotes = { ...votes };
    newVotes[sel] += 1;
    // console.log(newVotes);
    setVotes(newVotes);
  };

  const getPopularAnecdote = () => {
    let pop = -1;
    let higher = 0;
    for (let anec in votes) {
      if (votes[anec] > higher) {
        pop = anec;
        higher = votes[anec];
      }
    }
    setPopular(pop);
  };

  useEffect(() => {
    getPopularAnecdote();
  }, [votes]);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button
        onClick={() => {
          addVote(selected);
        }}
      >
        Vote
      </button>
      <button onClick={() => changeAnectote()}>Next Anecdote</button>

      <h2>Anecdote with most votes:</h2>
      <h4>{anecdotes[popular]}</h4>
    </>
  );
};

export default App;
