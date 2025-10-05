// import TodoContext from "../contexts/TodoContext";
// import { Navbar } from "./Navbar";
// import { TodoList } from "./TodoList";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AddTodo from "./AddTodo";

// export const App = () => {
//   return (
//     <TodoContext>
//       <Router>
//         <Navbar></Navbar>
//         <br />
//         <div className="uk-container">
//           <Switch>
//             <Route path="/create">
//               <AddTodo></AddTodo>
//             </Route>
//             <Route path="/" exact>
//               <h4>Minha lista de tarefas</h4>
//               <TodoList></TodoList>
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </TodoContext>
//   );
// };

import TodoProvider from "../contexts/TodoContext"; // ✅ default export
import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./AddTodo";

export const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Navbar />
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/create" element={<AddTodo />}></Route>
            <Route
              path="/"
              element={
                <>
                  <h4>Minha lista de tarefas</h4>
                  <TodoList />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
};
