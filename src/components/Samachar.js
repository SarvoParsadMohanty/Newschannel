import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import pic from "../images/news.jpg";
import "../css/sama.css";
const Samachar = (props) => {
  let pages = [];
  const country = props.country;
  const catogery = props.catogery;
  const [users, setUsers] = useState([]);
  const [curpage, setCurpage] = useState(1);
  const postprpge = 6;
  // const [postprpge, setPostprpge] = useState(6)
  const fetchData = async () => {
    const response = await fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/${catogery}/${country}.json `
    );
    const data = await response.json();
    if (!data) {
      return <h5>Wait for a second</h5>;
    }
    const actualData = data.articles;
    setUsers(actualData);
  };

  useEffect(() => {
    fetchData();
  });

  const lastpstindex = curpage * postprpge;
  const firstpstindex = lastpstindex - postprpge;
  const length = 20;
  const currentPost = users.slice(firstpstindex, lastpstindex);
  for (let i = 1; i <= Math.ceil(length / postprpge); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="imaged">
        <img src={pic} alt="" />
      </div>
      <div className="sama">
        {currentPost.map((user) => (
          <div>
            <Cards
              title={user.title}
              image={user.urlToImage !== null ? user.urlToImage : null}
              url={user.url}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        {pages.map((pages, index) => {
          return (
            <>
              <button
                className={pages === curpage ? "active" : "notactive"}
                onClick={() => setCurpage(pages)}
                key={index}
              >
                {pages}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Samachar;
