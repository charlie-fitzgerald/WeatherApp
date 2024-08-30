import React from 'react'

export default function Content() {
    const [state, setState] = React.useState("")

    const handleChange = event => {
        setState(event.target.value)
    }

    return ( 
        <div>
            <h1>Enter Text</h1>
            <br />
            <form>
                <input 
                    type="text"
                    placeholder="Enter Text"
                    onChange={handleChange}
                />
                <input type="submit"/>
            </form>
            <br />
            <h1>{state}</h1>
        </div>      
        
        
    )
}