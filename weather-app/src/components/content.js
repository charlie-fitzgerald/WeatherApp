import React from 'react'

export default function Content() {
    const [zipCode, setZipCode] = React.useState(90210)

    const handleChange = userInput => {
        setZipCode(userInput)
    }

    return (
        <div>
            <h1>Enter your Zip Code for local weather data</h1>
            <br />
            <form>
                <input 
                    type="text"
                    placeholder="Enter ZIP"
                    onChange={handleChange}
                />
            </form>
            <br />
        </div>      
        
        
    )
}