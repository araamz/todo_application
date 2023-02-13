import TodoItem from "../../components/TodoItem/TodoItem"
import all_todos_styles from "./AllTodosView.module.css"

const todos_response = {
    todos: [
        {
            priority_value: 0,
            id: "aed4dd3e-4912-46a9-90ce-6d082ec21a6d",
            finished: 0,
            todo_information: "Work on Chase's Paper."
        },
        {
            priority_value: 0,
            id: "6c154dea-3b02-4389-bdb1-ba47c9f481ed",
            finished: 0,
            todo_information: "Eat Lunch."
        },
        {
            priority_value: 1,
            id: "1442cd4f-051f-4203-ae71-af22239b69c3",
            finished: 0,
            todo_information: "Take dog out."
        },
        {
            priority_value: 2,
            id: "d173a7af-e85f-467e-9849-713bfeb39c7a",
            finished: 0,
            todo_information: "Pay Master's Pointe HOA Bill"
        },
        {
            priority_value: 2,
            id: "f9e54d67-0d37-4fbc-b75f-fba0621a71ae",
            finished: 0,
            todo_information: "Go to department meeting."
        },
    ]
}

const AllTodosView = () => {

    return (
        <div className={all_todos_styles.container}>
            {
                todos_response.todos.map(item => 
                    <TodoItem priority_value={item.priority_value} id={item.id} finished={item.finished}> {item.todo_information } </TodoItem>
                )
            }
        </div>
    )

}

export default AllTodosView