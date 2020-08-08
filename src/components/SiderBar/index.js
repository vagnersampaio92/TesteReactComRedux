import React, { useState, useEffect } from 'react';
import { Container, Pai, Name, Align } from "./style"
import { useSelector, useDispatch } from 'react-redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Submenu from '../SubMenu'
import Collapse from "@material-ui/core/Collapse";

export default function CourseList() {
    const menustate = useSelector(state => state);

    const [Menu, SetMenu] = useState({
        data: menustate.data
    })
  

    function handlestate(menu) {
        menu.flag = !menu.flag

        SetMenu({ ...Menu });


    }

    return (
        <>
            <Container>{Menu.data.map(menu => (
                <>
                    <Align>
                        {menu.flag ? <ExpandMoreIcon onClick={() => handlestate(menu)}></ExpandMoreIcon> : <ExpandLessIcon onClick={() => handlestate(menu)}></ExpandLessIcon>}
                        <Name onClick={() => handlestate(menu)}>{menu.name}</Name>
                    </Align>
                    <Collapse in={menu.flag}> {/* Efeito de transição na abertura   */}
                        <Pai elevation={4}>
                            <Submenu menu={menu.sub}></Submenu>
                        </Pai>
                    </Collapse>
                </>
            ))}</Container>
        </>
    )
}

