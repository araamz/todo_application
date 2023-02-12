import todo_item_styles from "./TodoItem.module.css"

import PriorityTag from "../PriorityTag/PriorityTag";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoItem = (props: {children: any, priority_value: number, id: string, finished: boolean}) => {

    const [id_label, set_id_label] = useState<string>(props.id)
    const navigate = useNavigate()

    useEffect(() => {
        let shorten_id = String(id_label).slice(id_label.length - 5, id_label.length)
        set_id_label(shorten_id)
    }, [])

    const handle_done_click = () => {
    }

    const handle_details_click = () => {
        navigate(`/finished/${props.id}`)
    }

    return (
        <div className={todo_item_styles.container}>
            <div className={todo_item_styles.header}>
            <p className={todo_item_styles.priority_tag}>
                <span className={todo_item_styles.uuid_bold}>UUID:</span> ...{ id_label }
            </p>
            <PriorityTag className={todo_item_styles.priority_tag} priority_value={props.priority_value} /> 
            </div>
            <div className={todo_item_styles.body}>
                <p className={todo_item_styles.body_text}>
                    { props.children }
                </p>
            </div>
            <div className={todo_item_styles.footer}>
            {props.finished ? <button className={todo_item_styles.action_button}> Unfinish </button> : undefined}
                { props.finished ?
                <button className={todo_item_styles.action_button} onClick={handle_details_click}>
                    Details
                </button> : <button className={todo_item_styles.action_button} onClick={handle_done_click}>
                    Done
                </button> }
            </div>
        </div>
    )

}

export default TodoItem;