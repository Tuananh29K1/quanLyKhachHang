import React from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../../Store/Reducer/ReducerListDetail";

function HeadTableDT() {
  // ==================== load title ============================
  const todos = useSelector(todosSelector);
  // ======================== end load title =======================
  return (
    <tr>
      <th id="boxCheck" className="witdh-50">
        <label className="customCheck">
          <input type="checkbox" />
          <span className="checkMark--check" />
        </label>
      </th>
      {todos.map((todo) => {
        return (
          <th key={todo.id} className={todo.completed === false ? "hide" : ""} style={todo.id === 1 ? {width:"150px"} : {}}>
            {todo.title}
          </th>
        );
      })}
    </tr>
  );
}

export default HeadTableDT;
