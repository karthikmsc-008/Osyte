import React,{useEffect,useState} from 'react';
import Pagination from './Pagination';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './movies.css'
const Movies=()=>{
    const[movies,SetMovies]=useState([]);
    const[currentPage,SetCurrentPage]=useState(1);
    const[PostPerPage,SetPostsPerPage]=useState(5);
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
    const indexOfLastPost=currentPage*PostPerPage;
    const indexOfFirstPage=indexOfLastPost-PostPerPage;
    const currentPost=movies.slice(indexOfFirstPage,indexOfLastPost)
    const Paginate=(pageNumber)=>SetCurrentPage(pageNumber)
    return(
        <div>
         <Link to={'/search'}>   <button className='SearchButton'>Search</button></Link>
         <br></br>
         <br></br>
            <div>
             
                <table className='table'>
                    <tr className='tablehead'>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                        <th>OverView</th>
                        </tr>
                    {currentPost.map((data)=>{
                        return(
                            <tr key={data.id} className='tablebody'>
                                <td >{data.title}</td>
                                <td>{data.release_date}</td>
                                <td>{data.vote_average}</td>
                                <td style={{textAlign:"justify",textJustify:"inter-word"}}>{data.overview}</td>
                            </tr>)
                        
                        })}
                </table>
                
            </div>
            <Pagination postsPerPage={PostPerPage} totalPosts={movies.length} Paginate={Paginate}></Pagination>
        </div>
    )
}
export default Movies;