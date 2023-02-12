import { NavLink, Outlet } from "react-router-dom";

const FinishedTodosRoot = () => {

    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    )

}

export default FinishedTodosRoot;