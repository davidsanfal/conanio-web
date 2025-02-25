import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';

function ConanFilter(props) {
  const [checked, setChecked] = useState(props.checked);

  const handleChange = () => {
    props.handleFilter(props.filter, props.filter_id, !checked)
    setChecked(!checked)
  }

  return(
    <Form.Check
      inline
      label={props.filter}
      type="checkbox"
      id={"custom-inline-checkbox-" + props.filter}
      checked={checked}
      onChange={handleChange}
    />
  )
}

export function ConanListFilter(props) {
  return(
    <div key="custom-inline-checkbox" className="mb-3">
    {props.filters && props.filters.map((info) => (<Row key={info.id}><ConanFilter filter_id={info.id} filter={info.filter} checked={info.checked} handleFilter={props.handleFilter}/></Row>))}
    </div>
    )
}

export function ConanSearchBar(props) {
  return (
    <div>
      <Row><Form.Control type="text" value={props.value} onChange={(e) => props.handleChange(e.target.value)}/></Row>
      {props.data_to_show && <Row lg="4">{props.data_to_show}</Row>}
      {props.searchButton && <Row lg="4"><Button variant="primary" type="submit">Search</Button></Row>}
    </div>
  )
}
