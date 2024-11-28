
import { RecoilRoot, useRecoilValue  } from 'recoil'
import { TodosAtomFamily } from './Atoms/atoms';
import './App.css'

function App() {
 
  return (
    <RecoilRoot>
      <Todo id={1} /> <br /> <br />
      <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({id}){
  
  const todo = useRecoilValue(TodosAtomFamily(id));
  return <>
  {todo.title} <br />
  {todo.description}
  </>
}

export default App
