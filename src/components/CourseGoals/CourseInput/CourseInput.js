import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color : ${props => props.invalid ? 'red' : 'black' }
  }

  @media(min-width:700px){
    width:auto;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")}};
    background : ${props=>(props.invalid ? 'red' : 'black')}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  let error = <p>Field required</p>;
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'}> */}
      <FormControl invalid={!isValid}>
        {/* <label style={{ color: !isValid ? "red" : "" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "",
            backgroundColor: !isValid ? "salmon" : "white",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
        {!isValid && error}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
