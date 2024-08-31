import React from 'react'

export default function Content() {
    const [state, setState] = React.useState("")

    const dateBuilder = d => {
        let months=["January",'February','March','April','May','June','July','August','September','October','November','December'];
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${month} ${date}, ${year}`
    }


    return ( 
        <div className="app">
            <main>
                <div className="search-box">
                    <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    />

                </div> 

                <div className="location-box">
                    <div className="location">New York City, USA</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>

                <div className="weather-box">
                    <div className="temp">15°C</div>
                    <div className="weather">Sunny</div>
                </div>
                
            </main>
        </div>      
        
        
    )
}