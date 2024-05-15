import React from 'react'
import '../styles/coding.css'
import Navbar from './Navbar'
import Card from './Card'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const Coding = () => {
  const [winnerData, setWinnerData] = useState(null)
  const [runnerData, setRunnerData] = useState(null)
  const [codingData, setCodingData] = useState()
  const [Date, setNoDate] = useState(true)

  const [data, setData] = useState({
    year: '',
    month: "",
    week: ''
  })
  const [dates, setDates] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/eventdates')
      .then((data) => {
        setDates(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [1])

  const handleSubmitClick = (e) => {
    e.preventDefault();
    var keyword = '';
    Object.values(data).map((el) => {
      keyword += el
    })
    // setString(keyword);
    if(data.year=='' || data.month=='' || data.week=='' || data.year=='null' || data.month =='null' || data.week=='null')
    {
      alert("All Feilds are Required");
      return;
    }
    axios.get(`http://localhost:8000/coding/${keyword}`)
      .then((res) => {
        // console.log(res.data)
        setWinnerData(res.data.winner)
        setRunnerData(res.data.runner)
        setCodingData(res.data)
        setNoDate(true);

      })
      .catch((err) => {
        alert("No Data Found");
        if (err.response.data.message === 'Coding data not found!') {
          setNoDate(false);
        }
      })

  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    })
  }
  return (
    <>
      <Navbar color={"#fff"} />
      <div className='coding'>
        <div className="controller">
          <form onSubmit={handleSubmitClick}>
            <div className="select-input">
              <label>Select Year</label>
              <select onChange={handleChange} name="year">
                <option>SELECT YEAR</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="select-input">
              <label>Select Month</label>
              <select onChange={handleChange} name="month">
                <option>SELECT MONTH</option>
                <option value={"01"}>JAN</option>
                <option value={"02"}>FEB</option>
                <option value={"03"}>MAR</option>
                <option value={"04"}>APR</option>
                <option value={"05"}>MAY</option>
                <option value={"06"}>JUNE</option>
                <option value={"07"}>JULY</option>
                <option value={"08"}>AUG</option>
                <option value={"09"}>SEP</option>
                <option value={"10"}>OCT</option>
                <option value={"11"}>NOV</option>
                <option value={"12"}>DEC</option>
              </select>
            </div>
            <div className="select-input">
              <label>Select Week</label>
              <select onChange={handleChange} name="week">
                <option>SELECT WEEK</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
              </select>
            </div>

            <input type='submit' value={"SUBMIT"} />
          </form>
        </div>
        <div className='coding-data-container'>
          {
            Date ? (
              <div className="coding-data" >
                {winnerData && codingData ?
                  <div className='data'>
                    <p><b>Event Date</b>: {codingData.date}</p>
                    <p><b>Cordinator</b>: {codingData.cordinator} </p>
                    <p><b>Participants</b>: {codingData.participants} </p>
                    <p><b>Location and Venue</b>: {codingData.location} </p>
                    <p><b>REPORT</b>: {codingData.report}</p>
                  </div>
                  : (
                    <div style={{ textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                      <h1>Contests Dates done till today</h1>
                      <>
                        {
                          dates.map((el) => (
                            <h3 key={el._id}><b>{el.date}</b> -- Conducted by <b style={{ textTransform: "uppercase" }}>{el.dept}</b> </h3>
                          ))
                        }
                      </>
                    </div>
                  )
                }
                <div className="card-container">
                  {winnerData && <Card rank="Winner" name={winnerData.name} dept={winnerData.dept} image={winnerData.image} roll={winnerData.roll} />}
                  {runnerData && <Card rank="Runner" name={runnerData.name} dept={runnerData.dept} image={runnerData.image} roll={runnerData.roll} />}
                </div>
              </ div>
            ) : (
              <div style={{ textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                <h1>Contests Dates done till today</h1>
                <>
                  {
                    dates.map((el) => (
                      <p><b>{el.date}</b>-- Conducted by <b style={
                        {textTransform:"uppercase"}
                      }>{el.dept}</b> </p>
                    ))
                  }
                </>
              </div>
            )
          }

        </div>
        {/* <div className="coding-data" >
          {winnerData && codingData ?
            <div className='data'>
              <p><b>Event Date</b>: {codingData.date}</p>
              <p><b>Cordinator</b>: {codingData.cordinator} </p>
              <p><b>Participants</b>: {codingData.participants} </p>
              <p><b>Location and Venue</b>: {codingData.location} </p>
              <p><b>REPORT</b>: {codingData.report}</p>
            </div>
            : (
              <h1>No data Found</h1>
            )
          }
          <div className="card-container">
            {winnerData && <Card rank="Winner" name={winnerData.name} dept={winnerData.dept} image={winnerData.image} roll={winnerData.roll} />}
            {runnerData && <Card rank="Runner" name={runnerData.name} dept={runnerData.dept} image={runnerData.image} roll={runnerData.roll} />}
          </div>
        </ div> */}
        {/* <div className='coding'>
          {
            !Date ? (
             
            ) : (
              <div style={{ textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                <h1>Contests Dates done till today</h1>
                <>
                  {
                    dates.map((el) => (
                      <p>{el.date}-- Conducted by {el.dept} </p>
                    ))
                  }
                </>
              </div>
            )
          }
        </div> */}
      </div>
    </>
  )
}



export default Coding

