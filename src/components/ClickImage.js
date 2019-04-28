import React from 'react'

function ClickImage(props) {
  return (
    <div className=""  width="395" height="270">
        <img
          src={props.imageFileName}
          name={props.imageFileName}
          onClick={props.clickEvent}
          height="250"
          width="375"
        ></img>
    </div>
  )
}

export default ClickImage