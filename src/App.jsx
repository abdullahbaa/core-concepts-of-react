import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
// import Time from './time'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      {/* <Time
         tManagement="you are on time" isOn={true}>
      </Time>
      <Time
         tManagement="you are not on time" isOn={false}>
      </Time>
      <Time
         tManagement="Work Hard" isOn ={true}>
      </Time> */}
      <Todo
        task='learn-react'
        isDone={true}>
      </Todo>
      <Todo
        task='explore-core-concepts'
        isDone={false}>
      </Todo>
      <Todo
        task='try-JSX'
        isDone={true}>
      </Todo>
      {/* <Device name="Laptop" price ="55k"></Device>
    <Device name="Watch" price ="10k"></Device>
    <Device name="Mobile" price ="20k"></Device>
    <Person></Person>
    <AmarStudent Class="7th" Grade="A-grade"></AmarStudent>
    <AmarStudent Class="Seven" Grade="2nd Standard"></AmarStudent>
    <AmarStudent Class="12th" Grade="1st Standard"></AmarStudent>
    <Developer></Developer>
    <MyScore Grade={A-Lavel} Score={90}></MyScore> */}

    </>
  )
}
const { Grade, Score } = { Grade: '7th', Score: '99' };
function MyScore({ Grade, Score }) {
  // console.log(Grade,Score);
  return (
    <div className='student'>
      <h2>HE IS A GOOD STUDENT:</h2>
      <h3>HIS SCORE IS: {Score} </h3>
    </div>
  );
}

function AmarStudent(gross) {
  console.log(gross)
  return <p>He is a Good Student : Class:{gross.Class} <br />Grade:{gross.Grade}</p>


}
function Device(props) {
  console.log(props);
  return <h2>This is device :{props.name} Price: {props.price}</h2>
}
function Person() {
  const age = 26;
  const money = 20;
  const Abdullah = { age: 26, Height: 10.5 }
  return <h3>I am a person: {age + money + Abdullah}</h3>
}
function Student() {
  return (
    <dev className='student'>
      <h3>I am a Student</h3>
      <h2>I am learning React Basics</h2>
      <p>Name:</p>
      <p>Age:</p>
    </dev>
  );
}
function Developer() {
  const developerStyle = {
    margin: '10px',
    padding: '10Px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <dev style={developerStyle} >
      <h5>Devo Devo</h5>
      <p>Coading</p>
    </dev>
  );
}
export default App
