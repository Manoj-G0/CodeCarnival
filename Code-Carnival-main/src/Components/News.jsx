import React, { useEffect, useState } from 'react'
import '../styles/news.css'
import Navbar from './Navbar'
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([])
  async function get_news() {
    await axios.get("http://localhost:8000/announcements/all")
      .then((res) => {
        // console.log(res.data.reverse())
        setNews(res.data.reverse())
      })
  }
  useEffect(() => {
    get_news();
  }, [1])
  const speaker =
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="50"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
  return (
    <>
      <Navbar color={"#fff"} />
      <div className='news'>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h2>Announcements</h2>
          {speaker}
        </div>
        <div className="news-content">
          <ul style={{ display: "inline-block" }}>
            {
              news && news.map((el) => {
                return (

                  <li key={el._id}><p>{el.description}</p></li>

                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default News
