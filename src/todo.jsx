// export default function Todo({task,isDone}){
//    task ="ami ghumabo";
//     return(
//         <li>Task : {task}</li>
//     );
// }


// Conditional rendering option 1:
// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>Working Progress :{task}</li>
//     }
// }

// Conditional rendering option 2:
// export default function Todo({task,isDone}){
    
//     if(isDone){
//         return<li>finished: {task}</li>
//     }
//     return <li>Working Progress :{task}</li>
// }

// Conditional rendering option 3: ternary operator

// export default function Todo({task,isDone}){
//     return(
//     <li>{isDone ? 'Finished': 'Work Done'} : {task}</li>
//     );
// }
// Conditional rendering option 4: &&
// export default function Todo({task,isDone}){
//    task ="ami ghumabo";
//     return(
//         <li>{task} {isDone && ':Done'}</li>
//     );
// }

// Conditional rendering option 5: ||

// export default function Todo(task,isDone){
//     task ="ami ghumabo";
//     return(
//         <li>{task} {isDone || ':Do it'}</li>
//     )
// }
// Conditional rendering option 6:

// export default function Todo(task,isDone){
//     let  listItem;
//     if(isDone){
//         listItem = <li>Finish :{task}</li>
//     }
//     else{
//         listItem = <li>Work on:{task}</li>
//     }
//     return listItem;
// }



