import { atomFamily } from "recoil";
import { TODOS } from "../Todos/TODOs";


export const TodosAtomFamily = atomFamily({
    key: "todosatomfamily",
    default: id =>{
        return TODOS.find(x => x.id === id)
    }
})