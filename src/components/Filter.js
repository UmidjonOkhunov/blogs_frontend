import React from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(filterChange(event.target.value.toLowerCase()));
  };
  const style = {
    paddingTop: 10,
  };

  return (
    <div style={style}>
      <InputGroup className="mb-3" onChange={handleChange}>
        <FormControl
          placeholder="Search here"
          aria-label="Search here"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Filter;
