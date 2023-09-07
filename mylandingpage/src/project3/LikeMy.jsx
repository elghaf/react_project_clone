import React from 'react'
import Title from '../components/Title'
export default function LikeMy() {
  return (
    <div className="container">
        <Title text='like this photos'></Title>
        <Title text='Likees' classes={"subtitle"}></Title>
        <div className="card card-dark m-auto" style={{width:300, cursor: "pointer"}}>
            <div className="card-header fs-xl">
                <small>DogyDogg</small>
            </div>
            <img src="" alt="img" style={{height: "fit-content"}} />
        </div>
    </div>
  )
}
