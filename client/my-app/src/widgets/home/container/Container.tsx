import React, { HTMLAttributes } from "react";

export const AppContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <section {...props}>
            {props.children}
        </section>
    )
}