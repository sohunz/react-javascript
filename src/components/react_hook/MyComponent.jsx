import { useState } from "react"

const MyComponent = () => {

    const [score, setScore] = useState(0);

    const myScore = () => {

        //add +1
        // setScore(score + 1);

        // add +2
        setScore((test) => test + 1);
        setScore((test) => test + 1);
    }

  return (
    <div>
        <p>{score}</p>
        <button onClick={myScore}>update</button>
    </div>
  )
}

export default MyComponent