import React, { useState, useEffect } from 'react';
import { Container, Pai, Name, Align, Extra } from "./style"
import { useSelector, useDispatch } from 'react-redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Submenu from '../SubMenu'
import Collapse from "@material-ui/core/Collapse";
// const   menu = useSelector(state => state.data);


export default function SubMenu({ menu }) {

    const [Menu, SetMenu] = useState({

    })
    useEffect(() => {
    }, []);
    function handlestate(m) {
        m.flag = !m.flag
        SetMenu({ ...menu });
    }
    return (
        <Container>{menu.map(m => (
            <>
                {console.log(m)}
                <Align>
                    {m.sub ?
                        <>
                            {m.sub.length > 0 ?
                                <>{m.flag ? <ExpandMoreIcon onClick={() => handlestate(m)}></ExpandMoreIcon> : <ExpandLessIcon onClick={() => handlestate(m)}></ExpandLessIcon>}
                                    <Name onClick={() => handlestate(m)}>{m.name}</Name>
                                </>
                                : 
                                    <Extra>{m.name}</Extra>   
                            }
                        </> : 
                            <Extra>{m.name}</Extra>
                        
                    }
                </Align>
                <Collapse in={m.flag} Teste>
                    <Pai elevation={4}>
                        <>
                            {m.sub &&
                                <Submenu menu={m.sub}></Submenu>
                            }
                       </>
                    </Pai>
                </Collapse>
            </>
        ))}</Container>
    )
}

