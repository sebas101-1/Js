import index from "./index"

export default function Button({count}=props){
    return(
        <button onClick={incCount()}>Click Me {count}</button>
    );
}