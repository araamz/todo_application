import { NavLink, Outlet } from "react-router-dom"

import todos_root_styles from "./TodosRoot.module.css"

const TodosRoot = () => {

    return (
        <div className={todos_root_styles.container}>
            <nav className={todos_root_styles.nav}>
                <NavLink to={"/todos"} end className={({isActive}) => 
                    isActive ? todos_root_styles.active_style : undefined
                }>
                    TASKS
                </NavLink>
                <NavLink to={"create"} end className={({isActive}) => 
                    isActive ? todos_root_styles.active_style : undefined
                }>
                    NEW
                </NavLink>
            </nav>
            <div className={todos_root_styles.outlet}>
                <Outlet/>
            </div>
        </div>
    )
}

export default TodosRoot