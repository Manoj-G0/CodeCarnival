import React, { useState ,useEffect} from 'react'
import '../styles/gallery.css'
import Navbar from './Navbar'
import { Carousel } from './Carousel'
import axios from "axios"


const Gallery = () => {

  const [data,setData] = useState()
  async function get_gallery() {
    await axios.get("http://localhost:8000/gallery/all")
      .then((res) => {
        setData(res.data)
      })
  }
  useEffect(() => {
    get_gallery();
  }, [1])
  return (
    <>
      <Navbar color={"#fff"}/>
      <div className='gallery'>
        {data && <Carousel data={data}/>}
      </div>
    </>
  )
}

export default Gallery
