import React from 'react'
import { Col, Row } from "./grid"
import ClickImage from './ClickImage'

function ImageArray(props) {
  /*
    Expects an array of filenames & returns a list of xml rows & columns & images
  */
  const rows = props.rows || 3
  const cols = props.cols || 4
  // Function Farm
  const makeRowsThenCols = () => {
    const rowsXml = []
    for (let r = 0; r < rows; r++) {
      rowsXml.push(
        <Row>
          {makeCols()}
        </Row>
      )
    }
    return rowsXml
  }
  const makeCols = () => {
    const columnsXml = []
    for (let c = 0; c < cols; c++) {
      columnsXml.push(
        <Col>
          <ClickImage imageFileName={props.imageFileNames[i]} clickEvent={props.clickEvent}/>
        </Col>
      )
      i++
    }
    return columnsXml
  }
  let i = 0
  return makeRowsThenCols()
}

export default ImageArray