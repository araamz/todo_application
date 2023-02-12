import priority_tag_styles from "./PriorityTag.module.css"

import { useEffect, useState } from "react"

const PriorityTag = (props: {className?: any, priority_value: number}) => {

    const [priority_label, set_priority_label] = useState<string>("LOW")
    const [priority_color, set_priority_color] = useState<string>(priority_tag_styles.low_color)

    useEffect(() => {
        if (props.priority_value == 0) {
            set_priority_label("LOW")
            set_priority_color(priority_tag_styles.low_color)
        } else if (props.priority_value == 1) {
            set_priority_label("MEDIUM")
            set_priority_color(priority_tag_styles.medium_color)
        } else {
            set_priority_label("HIGH")
            set_priority_color(priority_tag_styles.high_color)
        }
    }, [])

    return (
        <div className={`${priority_color} ${priority_tag_styles.container} ${props.className} `}>
            <p>
                { priority_label }
            </p>
        </div>
    )
}

export default PriorityTag;