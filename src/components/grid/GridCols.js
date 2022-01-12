import React, { useState, useEffect, useRef} from 'react'
import { GridCols } from '../../styles/grid';

export function Grid(props) {
    const elemento = useRef(0);
    const currentWidth = elemento.current.offsetWidth;
    const [componentWidth, setComponentWidth] = useState(currentWidth);

    useEffect(() => {
        function po() {
            setComponentWidth(currentWidth);
            console.log(currentWidth);
        }

        window.addEventListener('resize', po);
    });
    
    return (
        <GridCols xs={props.xs} sm={props.sm} md={props.md }lg={props.lg} componentWidth={componentWidth} ref={elemento}>
            {props.children}
        </GridCols>
    )
}
