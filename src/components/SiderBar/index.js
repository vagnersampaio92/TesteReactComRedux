import React, { useState, useEffect } from 'react';
import { Container, Pai, Name, Align } from "./style"
import { useSelector, useDispatch } from 'react-redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Submenu from '../SubMenu'
import Collapse from "@material-ui/core/Collapse";

export default function CourseList() {
    const menustate = useSelector(state => state);
    const dispatch = useDispatch();
//Não precisava usar o useState, mas coloquei para diminuir a verbosidade já que posso usar apenas Menu no lugar de menustate.data, e quis demonstrar o uso deste hook também
    const [Menu, SetMenu] = useState( 
        menustate.data
    )
  
    function handlestate(menu) {
        menu.flag = !menu.flag
        // SetMenu({ ...Menu }); // quis por para demonstrar o uso caso não tivesse usando o redux
        dispatch({type:'HANDLE_MENU', menu})
    }

    return (
        <>
            <Container>{Menu.map(menu => (
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

