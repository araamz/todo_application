import single_finished_todo_view_styles from "./SingleFinishedTodoView.module.css"

import ItemContainer from "../../components/ItemContainer/ItemContainer";
import PriorityTag from "../../components/PriorityTag/PriorityTag";

const SingleFinishedTodoView = () => {
    return (
        <div className={single_finished_todo_view_styles.container}>
            <div className={single_finished_todo_view_styles.information_items}>
                <ItemContainer className={`${single_finished_todo_view_styles.item_container}`} label="Todo Information">
                    <p>
                        This is a test.
                    </p>
                </ItemContainer>
                <ItemContainer className={`${single_finished_todo_view_styles.item_container}`} label="Date Created">
                    <p>
                        Tests
                    </p>
                </ItemContainer>
                <ItemContainer className={single_finished_todo_view_styles.item_container} label="Finished Date">
                    <p>

                    </p>           
                </ItemContainer>
                <ItemContainer className={single_finished_todo_view_styles.item_container} label="Todo Priority">
                    <PriorityTag priority_value={0} />
                </ItemContainer>
            </div>
            <div>
                <button>
                    Delete
                </button>
                <button>
                    Unfinish
                </button>
            </div>
        </div>
    )
}

export default SingleFinishedTodoView;