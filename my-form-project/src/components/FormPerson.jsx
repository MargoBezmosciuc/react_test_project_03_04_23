import React, { useContext, useState } from "react";
import { ContextState } from "../globals/context";

import styled from "styled-components";

const FormPerson = () => {
  const [person, dispatch] = useContext(ContextState);

  const [state, setState] = useState({
    id: null,
    name: "",
    age: "",
  });

  const addPerson = (e) => {
    e.preventDefault();
    const { name, age } = state;
    if (name === "" || age === "") {
      alert("Some of inputs are empty!");
      return;
    }
    dispatch({
      type: "ADD_PERSON",
      data: { id: person.length + 1, name, age },
    });
    setState({
      name: "",
      age: "",
    });
  };

  const startEdit = (id) => {};

  const editPerson = () => {};

  const deletePerson = (id) => {};

  return (
    <>
      <FormOfPerson>
        <div>
          <StyledInput placeholder="Name" name="name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
        </div>
        <div>
          <StyledInput placeholder="Age" name="age" value={state.age} onChange={(e) => setState({ ...state, age: e.target.value })} />
        </div>

        {/* <Button /> */}
        <Button onClick={state.id ? editPerson : addPerson}>{state.id ? "Save" : "Add"}</Button>
      </FormOfPerson>
      <Table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {person.length > 0 ? (
          person.map((onePerson) => {
            return (
              <tr>
                <Td>{onePerson.id}</Td>
                <Td>{onePerson.name}</Td>
                <Td>{onePerson.age}</Td>
                <Td>
                  <Button onClick={() => startEdit(onePerson.id)}>Edit</Button>
                </Td>
                <Td>
                  <Button onClick={() => deletePerson(onePerson.id)}>Delete</Button>
                </Td>
              </tr>
            );
          })
        ) : (
          <tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
        )}
      </Table>
    </>
  );
};

const FormOfPerson = styled.form`
  border: 2px solid grey;
  border-radius: 10px;
  padding: 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #c0b8b876;
  margin: 8rem;
  display: grid;
  grid-row-gap: 1vh;
  width: 30vw;
  div {
    display: grid;
  }
`;

const StyledInput = styled.input`
  width: 50%;
  margin: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  border-color: #2b2828;
  box-shadow: 0 0 0 2px #2b282880;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 5rem;
  background: #4240407d;
  color: #2b2828;
  border-radius: 5px;
  padding: 0.25rem;
  &:hover {
    background: #2b2828;
    color: #fff;
  }
`;
const Table = styled.table`
  border: 2px solid black;
  margin: 2rem 8rem;
  width: 47rem;
  padding: 0.5rem;
  border-radius: 10px;
  background: lightblue;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Td = styled.td`
  padding: 0.2rem;

`;
export default FormPerson;
