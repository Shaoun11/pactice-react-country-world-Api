import { useState } from "react";


const Country = ({country,handlevisited,flaghandle}) => {
    console.log(country);
    const {name,flags,area,region,startOfWeek,cca2}=country;

    const [visited,setvisited]=useState(false);
    const handlebtn=()=>{
        setvisited(!visited)
    }
     
   
    return (
        <div className='border-solid border-2 border-pink-600 m-4 rounded-lg p-8'>
            <h1 className="text-2xl font-bold mb-4 ">Name: <span className=" text-sky-500">{name.common}</span> </h1>
            <img className=" w-36" src={flags.png} alt="" />
            <h2 className="text-white" >AREA:{area}</h2>
            <h2 className="text-white" >Region:{region}</h2>
            <h2 className="text-white" >Holiday:{startOfWeek}</h2>
            <h2 className="text-2xl font-bold" >Code:{cca2}</h2>
            <br />
            <button onClick={()=>{handlevisited(country)}} className="btn btn-secondary mb-4" >Make as visited</button>
            <br />
            <button onClick={()=>{flaghandle(country.flags.png)}} className="btn btn-secondary mb-4" >Add Flag</button>
            <br />
            <button onClick={handlebtn} className="btn btn-success" >{visited? "visited this country" :"going"}</button>
            <br />
            {
                visited?<span className="text-2xl font-semibold" >I am visited this country</span> :<span className="text-2xl font-semibold" >visited this country as soon as possible</span>
            }
           
        </div>
    );
};

export default Country;