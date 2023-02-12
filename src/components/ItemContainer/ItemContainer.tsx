import item_container_styles from "./ItemContainer.module.css"

const ItemContainer = (props: {className?: any, children: any, label: string}) => {

    return (
        <div className={`${item_container_styles.container} ${props.className}`}>
            <p className={item_container_styles.label}>
                { props.label }
            </p>
            <div>
                { props.children }
            </div>
        </div>
    )
}

export default ItemContainer