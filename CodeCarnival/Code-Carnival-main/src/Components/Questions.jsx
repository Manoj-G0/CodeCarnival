import React, { useState } from 'react'
import '../styles/Questions.css'
import Navbar from './Navbar'
import axios from "axios";

const Questions = () => {
    const [date, setDate] = useState()
    const [data, setData] = useState([])
    const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
            await axios.get(`http://localhost:8000/questions/getbyid/${date}`)
                .then((res) => {
                    if (res.data.length != 0) {
                        // console.log(res.data.questions)
                        setData(res.data.questions)
                    }
                    else {
                        alert("No Data Found")
                        return false
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Navbar />
            <div className='questions'>
                <div className="controller-questions">
                    <form onSubmit={handleSubmitClick}>
                        <div className="select-input">
                            <label>Select Date of Event</label>
                            <input type='date' name="date" required onChange={(e) => { setDate(e.target.value) }} />
                        </div>
                        <input type='submit' value={"Get Question Data"} />
                    </form>
                </div>
                <div className="question-data">
                    <div className="data">
                        <div className='data-container'>
                            {
                                data.length != 0 ? (
                                    data.map((el) => {
                                        return (
                                            <>
                                                <h1 >Question</h1>
                                                <h3 >{el.description}</h3>
                                                <h4 >Round:&nbsp;{el.round}</h4>
                                                <h4 >Marks:&nbsp;{el.marks}</h4>
                                            </>
                                        )
                                    })
                                ) : (
                                    <h3 style={{ textAlign: "center" }}>Hello,&nbsp;Please Select the Date</h3>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Questions
