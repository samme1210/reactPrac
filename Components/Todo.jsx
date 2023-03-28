import './Todo.css'

function Todo({ title, onTodoDelete }) {
    return (
        <div className="todo">
            <h2 className="todo__title"> { title } </h2>
            <button onClick={ onTodoDelete } className="delt__btn">Delete</button>
        </div>
    );
}

export default Todo