import create_todo_view from "./CreateTodoView.module.css"

import { useState } from "react"

const CreateTodoView = () => {

    const [todo, set_todo] = useState<string>("")
    const [priority, set_priority] = useState<number>(0)

    const handle_priority_change = (event: any) => {
        let priority_value = event.target.value
        set_priority(priority_value)
    }

    const handle_todo_change = (event: any) => {

        let todo_value  = event.target.value
        set_todo(todo_value)
    }

    return (
        <div className={create_todo_view.container}>
            <div className={create_todo_view.todo_form_container}>
                <p className={create_todo_view.form_label}>
                    Write your todo...
                </p>
                <textarea onChange={handle_todo_change} className={create_todo_view.todo_textarea}/>
            </div>
            <div className={create_todo_view.priority_form_container}>
                <p className={create_todo_view.form_label}>
                    What's your priority?
                </p>
                <form onChange={handle_priority_change} className={create_todo_view.priority_form}>
                    <div className={create_todo_view.priority_form_item}>
                        <input type="radio" defaultChecked value={0} name="priority" />
                        <label>LOW</label>
                    </div>
                    <div className={create_todo_view.priority_form_item}>
                        <input type="radio" value={1} name="priority" />
                        <label>MEDIUM</label>
                    </div>
                    <div className={create_todo_view.priority_form_item}>
                        <input type="radio" value={2} name="priority" />
                        <label>HIGH</label>
                    </div>
                </form>
            </div>
            <div>
                <button>
                    Create Todo
                </button>
            </div>
        </div>
    )

}

export default CreateTodoView;