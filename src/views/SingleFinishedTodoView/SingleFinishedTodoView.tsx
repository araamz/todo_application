import single_finished_todo_view_styles from "./SingleFinishedTodoView.module.css"

import ItemContainer from "../../components/ItemContainer/ItemContainer";
import PriorityTag from "../../components/PriorityTag/PriorityTag";

const SingleFinishedTodoView = () => {
    return (
        <div className={single_finished_todo_view_styles.container}>
            <div>
                <ItemContainer label="Date Created">
                    <p>
                        Tests
                    </p>
                </ItemContainer>
                <ItemContainer label="Finished Date">
                    <p>

                    </p>           
                </ItemContainer>
                <ItemContainer label="Todo Priority">
                    <PriorityTag priority_value={0} />
                </ItemContainer>
                <ItemContainer label="Todo Information">
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