import React from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../../Store/Reducer/ReducerListDetail";

const TableSumDT = () => {
  const todos = useSelector(todosSelector);
  // ======================== renderUser ====================
  const renderUser = (key) => {
    switch (key) {
      case 19:
        return "Tổng Nợ";
      case 20:
        return "Tổng Bán";
      default:
        break;
    }
  };
  // ================================ phần render ======================
  return (
    <>
      <tr>
        <td className="witdh-50"></td>
        {todos.map((todo) => {
          return (
            <td
              key={todo.id}
              className={todo.completed === false ? "hide" : "font-16-600"}
              style={todo.id === 1 ? {width:"150px"} : {}}
            >
              {renderUser(todo.id)}
            </td>
          );
        })}
      </tr>
    </>
  );
};

export default TableSumDT;
