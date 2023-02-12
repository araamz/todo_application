import { NavLink, Outlet } from "react-router-dom";

import root_styles from './Root.module.css'

const Root = () => {
    
    return (
        <div className={root_styles.root_container}>
            <nav className={root_styles.nav}>
                <NavLink to={"/todos"} className={({isActive}) => 
                    isActive ? root_styles.active_style : undefined
                }>
                    Todos
                </NavLink>
                <NavLink to={"/finished"} className={({isActive}) => 
                    isActive ? root_styles.active_style : undefined
                }>
                    Finished
                </NavLink>
            </nav>
            <div className={root_styles.outlet}>
                <Outlet />
            </div>

        </div>
    )

}

export default Root;