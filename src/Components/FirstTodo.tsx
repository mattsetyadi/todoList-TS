import React from 'react';

type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
  // call Place type below here
  place?: Place;
}>;

// inefficient we can change it like below
// type CompletedTodo = Readonly<{
//   id: number,
//   text: string,
//   // it'll force all array to change value done from false to true
//   done: true
// }>

type CompletedTodo = Todo & {
  readonly done: true;
};

// add union type so we can define a placetag for Todo type
type Place = 'home' | 'work' | { custom: string };

const FirstTodo: React.FC = () => {
  // Little exmple
  // const res: Todo = {
  //   id: 2,
  //   text: 'juji',
  //   done: true,
  // };

  const toggleTodo = (todo: Todo): Todo => {
    return {
      id: todo.id,
      text: todo.text,
      done: !todo.done,
      place: todo.place,
    };
  };

  const result = toggleTodo({
    id: 4,
    text: 'Andi Pamungkas',
    done: false,
  });

  const completeAll = (todos: readonly Todo[]): CompletedTodo[] => {
    return todos.map((todo) => ({
      ...todo,
      done: true,
    }));
  };

  // Function into string / change work to emoji work etc
  function placeToString(place: Place) {
    if (place === 'home') {
      return '🏠 Home';
    } else if (place === 'work') {
      return '💼 Work';
    } else {
      return '🚀' + place.custom;
    }
  }

  console.log('result value', result);
  console.log(
    'execute completeAll',
    completeAll([
      { id: 1, text: '…', done: false, place: 'work' },
      { id: 2, text: '…', done: true, place: 'home' },
      { id: 3, text: '…', done: false, place: { custom: 'gyms' } },
      { id: 4, text: '…', done: false },
    ])
  );

  console.log('😅', placeToString('work'));

  return (
    <div>
      <h1>logic TS from todo</h1>
    </div>
  );
};

export default FirstTodo;
