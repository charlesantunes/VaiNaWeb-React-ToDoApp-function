import React, { useEffect, useState } from "react";
import * as S from '../Style/AppStyle'

export default function List() {
  const [input, setInput] = useState();
  const [talkList, setTalkList] = useState([]);

  useEffect(()=>{},[])

    const Add = ()=>{
      if (input !== "" && !input.match(/^[\t]+$/)) {
        const valorInput = {
          value: input,
          id: Date.now(),
          status: false
        }  
        setTalkList((prevState) => [...prevState,valorInput])
        setInput('')        
      } else {
        alert("Digite uma tarefa")
      }
    }

  // Em desenvolvimento
  //   const Edit = (id, value) => {
		
	// 		setInput(value);
	// 		const filterList = talkList.filter((item) => item.id !== id)
  //     setTalkList(filterList)
	// };

    const Del = (recebeItemIdFunction) =>{
      const filterList = talkList.filter(item => item.id !== recebeItemIdFunction)
      setTalkList(filterList)
    } 

  return(
    <>
        <S.GlobalStyle />
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <S.Menu>Lista de Tarefas</S.Menu>
           <input value={input} onChange={(e)=>{setInput(e.target.value)}} />
           <button onClick={()=>{Add()}}>Adicionar</button>
           <ul>{talkList.map((item)=>        
               <S.Li>
               <li>
                 {item.value} 
                 <button onClick={()=>Del(item.id)}>Excluir</button>
                 {/* <button onClick={()=>Edit(item.id, item.value)}>Editar</button> */}
               </li>
               </S.Li>
           )}
           </ul>
        </form>
       
    </>
  
  )
}