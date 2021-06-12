import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelector, showTitle } from "../../Store/Reducer/ReducerListDetail";

function ListTitleDT(props) {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  // ========================= thay đổi title =========================
  const title = titleId => {
    dispatch(showTitle(titleId))
  };
  // ====================== load Title =============================
  function loadTitle() {
    return todos.map(todo => (
      <li className="d-flex item-list" key={todo.id}>
        <aside className="customCheck mr-2">
          <input type="checkbox" id={todo.id} defaultChecked={todo.completed === true}/>
          <span className="checkMark--check" />
        </aside>
        <label htmlFor={todo.id} onClick={() => title(todo.id)}>{todo.title}</label>
      </li>
    ));
  }
  // =============================== end load title ======================
  return (
    <>
      <div className="overlayList" onClick={() => props.show()}></div>
      <article className="list--detail">
        <ul>
          {loadTitle()}
        </ul>
        {/*End list*/}
      </article>
      {/*End List details*/}
    </>
  );
}

export default ListTitleDT;
