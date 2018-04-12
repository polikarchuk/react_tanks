import React from 'react';


function TanksListPage(props) {

    return(
        <div className="thumbnails">
            <h1>Most popular tanks</h1>
            {
                props.items.map(item =>{
                    function handleClick() {
                        props.handleTankSelect(item.model)
                    }
                    return(
                        <div onClick={handleClick} className="thumbnail"  title={"Clikc to detailes"} key={item.model}>
                            <img src = {item.preview}/>
                            <h3 className="title" title={item.model}>
                                <img  src = {item.country_image}/>
                                <span>{item.level} &nbsp; {item.model}</span>
                            </h3>
                        </div>

                        )
                    }

                )
            }
        </div>

    )


}
export default TanksListPage