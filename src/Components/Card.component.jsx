import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { togleBookmarks } from '../Store/actions/AddBookmark.action';
import { bookmarkHandler } from './../Store/reducers/Bookmark.reducer';
const Card = () => {
    const dispatch = useDispatch();
    const tglBookmarks = (empid) => {
        dispatch(togleBookmarks(empid))
    }
    let myEmpStore = useSelector((state) => state.bookmarkHandler.empData)
    let myEmpmark = useSelector((state) => state.bookmarkHandler.bookmark)
    return (
        <div className="row">
            {
                myEmpStore.map((value, index) => {
                    return (
                        <div className="card col-md-3 m-5">

                            <div>
                                <img src={value.img} alt="product-img" height="200" width="100%" />
                                <button className={`btn btn-${myEmpmark.includes(value.id) ? "danger" : "secondary"}`} onClick={() => tglBookmarks(value.id)}>{myEmpmark.includes(value.id) ? "added" : "add"}</button>
                                <h1>{value.id}</h1>
                                <h1>{value.name}</h1>
                                <h1>{value.profession}</h1>
                            </div>
                            <Link to={/'Profile'/ +
                                value.id}>View Profile</Link>
                        </div>

                    );
                })
            }

        </div>
    )
}

export default Card;



