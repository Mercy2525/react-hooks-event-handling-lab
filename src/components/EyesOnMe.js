// Code EyesOnMe Component Here
function EyesOnMe(){

    const toFocus=()=> console.log("Good!");
    const toBlur=()=>console.log("Hey! Eyes on me!")
    
    return(<div>
        <button onFocus={toFocus} onBlur={toBlur}>Eyes on me</button>
    </div>)

}
export default EyesOnMe;