import React, {useEffect, useState} from "react"; //importing react and required hooks
import axios from "axios";
const Giphy = () => 
{

    const[data,setData] = useState([]);
    
    useEffect( () =>
        {
            
            const fetchData = async () =>{
                const results = await axios("https://api.giphy.com/v1/gifs/trending",{
                        params: {
                            api_key: "ksO9C2j88HLpDO7a9G3kev1ikKK12a8W"
                        }        
                    });
                    
                    console.log(results);
                    setData(results.data.data);
            }

            fetchData();
        }, []);
    
        const renderGifs = () => {
            return data.map(el =>{
                return (
                    <div key={el.id} className="gif">
                        <img src={el.images.fixed_height.url}/>
                    </div>
                );
            });
        };
    return <div className="container gifs">{renderGifs()}</div>;
};

export default Giphy;