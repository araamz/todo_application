import finished_todos_root_styles from "./FinishedTodosRoot.module.css"

import { Outlet } from "react-router-dom";


const FinishedTodosRoot = () => {

    return (
        <div className={finished_todos_root_styles.container}>
            <Outlet />
        </div>
    )

}

export default FinishedTodosRoot;