import React,{useState,useEffect} from "react";
import './search.css'
import axios from "axios";
const Search=()=>{
    const[movies,SetMovies]=useState([]);
    const[searchdata,setSearchTerm]=useState('');
    const[search,SearchClick]=useState(false);
    const GetCall=()=>{
        const res=axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=d6e25301d2501c303e68bc4d6eecf23e`).then((res)=>{
            SetMovies(res.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }
   
    useEffect(()=>{
        return()=>{
            GetCall();
        }
    },[]);
   
    return(
        <div>
       {console.log(searchdata.length,"kj")}
            <div >
                <div className="searchBar">
                <div>
                <input onChange={(e)=>{setSearchTerm(e.target.value.toLocaleLowerCase())}}></input>
                </div>
              
                <div>
                    <button onClick={()=>{SearchClick(true)}}>Search</button>
                </div>
                </div>
                <div className="displaycardHead">
              
                    {!search && movies.map((data)=>{
                        return(
                            
                                <div className="displaycard">
                                    <div className="title">{data.title}
                                    <hr></hr></div>
                                    
                                    <div className="data">{data.overview}</div>
                                </div>
                                
                            
    
                        )
                        
                    })}
            
                </div>
                <div className="displaycardHead">
              
              {searchdata.length==0 && movies.map((data)=>{
                  return(
                      
                          <div className="displaycard">
                              <div className="title">{data.title}
                              <hr></hr></div>
                              
                              <div className="data">{data.overview}</div>
                          </div>
                          
                      

                  )
                  
              })}
      
          </div>
                {searchdata.length!==0 && search && 
                     movies.filter(ele=>ele.title.toLowerCase().includes(searchdata)).map((data)=>{
                        return(
                                <div className="displaycard1">
                                    <div className="title1">{data.title}
                                    <hr></hr></div>
                                    
                                    <div className="data1">{data.overview}</div>
                                </div>    
                        )
                        
                    })
            
                }
            </div>
          
           
        </div>
    )
}
export default Search