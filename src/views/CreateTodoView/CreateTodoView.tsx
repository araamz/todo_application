import create_todo_view from "./CreateTodoView.module.css"

import { useState } from "react"
import ItemContainer from "../../components/ItemContainer/ItemContainer"

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
            <ItemContainer label="Write your todo...">
                <textarea onChange={handle_todo_change} className={create_todo_view.todo_textarea}/>
            </ItemContainer>
            <ItemContainer label="What's your priority?">
                <form onChange={handle_priority_change} className={create_todo_view.priority_form}>
                    <div className={`${create_todo_view.priority_form_item} ${create_todo_view.low_color}`}>
                        <input type="radio" defaultChecked value={0} name="priority" />
                        <label className={create_todo_view.low_color}>LOW</label>
                    </div>
                    <div className={`${create_todo_view.priority_form_item} ${create_todo_view.medium_color}`}>
                        <input type="radio" value={1} name="priority" />
                        <label className={create_todo_view.medium_color}>MEDIUM</label>
                    </div>
                    <div className={`${create_todo_view.priority_form_item} ${create_todo_view.high_color}`}>
                        <input type="radio" value={2} name="priority" />
                        <label>HIGH</label>
                    </div>
                </form>
            </ItemContainer>
            <div>
                <button className={create_todo_view.create_button}>
                    Create Todo
                </button>
            </div>
        </div>
    )

}

export default CreateTodoView;