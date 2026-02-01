export default function Time({tManagement,isOn}){
    if(isOn){
       return <li>you are on time:Thank you{tManagement}</li>
    }
    else{
        return <li>you are late Today{tManagement}</li>
    }
}


// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>Working Progress :{task}</li>
//     }
// }