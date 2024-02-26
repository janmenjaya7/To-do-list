import { useState } from "react";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todo.trim() !== "") {
      setTodos((prevVal) => {
        return [...prevVal, { id: uuidv4(), text: todo }];
      });
      setTodo("");
    }
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("id", todo.id);
  };

  return (
    <>
      <h1>TodoList</h1>
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add something...."
        />
        <button onClick={handleClick} className="add-todo">
          Add Todo
        </button>
      </div>
      <ol>
        {todos.map((val) => {
          return (
            <ListItem
              value={val.text}
              key={val.id}
              id={val.id}
              onClick={onDelete}
            />
          );
        })}
      </ol>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import ListItem from "./ListItem";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleClick = () => {
//     if (todo.trim() !== "") {
//       setTodos((prevVal) => {
//         return [...prevVal, { id: uuidv4(), text: todo }];
//       });
//       setTodo("");
//     }
//   };

//   const onDelete = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <>
//       <h1>TodoList</h1>
//       <div className="inputs">
//         <input
//           type="text"
//           onChange={(e) => setTodo(e.target.value)}
//           value={todo}
//         />
//         <button onClick={handleClick} className="add-todo">
//           Add Todo
//         </button>
//       </div>
//       <ol>
//         {todos.map((item) => (
//           <ListItem
//             key={item.id}
//             id={item.id}
//             value={item.text}
//             onClick={onDelete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import ListItem from "./ListItem";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   // const [inputval, setInputval] = useState([]);

//   const handelClick = () => {
//     if (todo.length - 1 > 0) {
//       setTodos((prevVal) => {
//         return [...prevVal, { id: uuidv4(), text: todo }];
//       });
//       setTodo("");
//     }
//   };

//   // todo.filter((item) => {
//   //   item.i !== id;
//   // });
//   const onDelete = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//     console.log("id", todo.id);
//   };

//   return (
//     <>
//       <h1>TodoList</h1>
//       <div className="inputs">
//         <input
//           type="text"
//           onChange={(e) => setTodo(e.target.value)}
//           value={todo}
//           placeholder="Add somthing...."
//         />
//         <button
//           onClick={handelClick}
//           className="add-todo"
//           onKeyDown={handelClick}
//         >
//           add Todo
//         </button>
//       </div>
//       <ol>
//         {todos.map((val, onDelete) => {
//           return <ListItem value={val.text} key={val.id} onDelete={onDelete} />;
//         })}
//       </ol>
//     </>
//   );
// }
// export default App;

// import React, { useState } from "react";
// // import TodoList from "./TodoList";
// import TodoList from "./TodoList ";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todoText, setTodoText] = useState("");

//   const addTodo = () => {
//     if (todoText.trim() !== "") {
//       setTodos([...todos, { id: Date.now(), text: todoText }]);
//       setTodoText("");
//     }
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button onClick={addTodo}>Add Todo</button>
//       <TodoList todos={todos} onDelete={deleteTodo} />
//     </div>
//   );
// };

// export default App;
