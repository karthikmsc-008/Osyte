import React from 'react';
import './pagination.css'
const Pagination=({postsPerPage,totalPosts,Paginate})=>{
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumber.push(i);
    }
    return(
        <nav>
            <ul className='pagination' >
                {
                    pageNumber.map(number=>(
                        <li key={number} className='page-item'>
                            <a  onClick={()=>Paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Pagination