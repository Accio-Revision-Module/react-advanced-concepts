import { useRef, useState } from "react"
// import sum from "../utils/sum";

export const Home = () => {
    // const [number1, setNumber1] = useState("");
    // const [number2, setNumber2] = useState("");
    const [res, setRes] = useState("");

    const number1Ref = useRef(null);
    const number2Ref = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        import("../utils/sum").then((module) => {
            const num1 = number1Ref.current.value;
            const num2 = number2Ref.current.value;
            const result = module.default(+num1, +num2);
            setRes(result);
        })
    }

    const handleFocus = () => {
        number1Ref.current.focus();
    }

    console.log("Re rendering the component");

  return (
    <div>
        <h1>Home</h1>

        <form onSubmit={handleSubmit}>
            <p>
                <input type="number" ref={number1Ref} placeholder="Enter number 1" />
            </p>
            <p>
                <input type="number" ref={number2Ref} placeholder="Enter number 2" />
            </p>

            <button>Sum</button>
        </form>

        <p>
            <button onClick={handleFocus}>Focus</button>
        </p>

        <p>
            Result: {res}
        </p>
    </div>
  )
}