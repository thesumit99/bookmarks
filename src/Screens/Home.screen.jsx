import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Components/Card.component';
const Home = () => {
  let myData = useSelector((state) => state.bookmarkHandler.bookmark.length)
  console.log("====>", myData);
  return (
    <div>
      <div className="jumbotron">
        {
        }
        <h1>Logo</h1><h1 className="float-right">Bookmarks({myData})</h1>
        <div>
          <form>
            <input type="text" placeholder="serach...." className="form-control" />
          </form>
        </div>
      </div>
      <div className="col-md-12">
        <Card />
      </div>
    </div>
  )
}

export default Home;
