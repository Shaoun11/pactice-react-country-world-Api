import { useEffect, useState } from "react";
import Country from "./Country";


const Countriesdata = () => {
    const [countries,setcountries]=useState([]);
    
    const [visitedcountries,setvisitedcountries]=useState([]);
    
    const [flagshow,setflag]=useState([]);

    const flaghandle=flag=>{
        console.log('flag button add flag');
        const addflag=[...flagshow,flag];
        setflag(addflag);

    }


    const handlevisited=countrybd=>{
        console.log("handle make as visited clicked");
        const newvisitedcountriesadd=[...visitedcountries,countrybd];
        setvisitedcountries(newvisitedcountriesadd);
    };

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
    return (
        <div className="container mx-auto">
           <h3 className="text-3xl font-semibold text-center mt-6 "> Reset Countries Data:{countries.length}</h3>
           <div className="text-3xl font-semibold  mt-6 text-black text-center">
           <h3 >Visited Data:{visitedcountries.length}</h3> 
           
           <ul>
                    {
                        visitedcountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>

           </div>
           <div  className=" mb-5">
            {
                flagshow.map(flag=><img className="w-40 mb-3 " src={flag}></img>)
            }
         </div>
         <div className="grid lg:grid-cols-3 grid-cols-1 ">
         {
            countries.map(allcountry=><Country key={allcountry.area}
              handlevisited={handlevisited} flaghandle={flaghandle}  country={allcountry}></Country>)
           }
         </div>
        </div>
    );
};

export default Countriesdata;