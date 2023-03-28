function Todo( title ) {
    return (
        <div className="todo">
            <h1 className="todo__title"> { title } </h1>
            <button>Delete</button>
        </div>
    );
}

export default Todo