import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_WILDERS } from "../App";

const ADD_WILDER = gql`
  mutation AddWilder($name: String!) {
    addWilder(name: $name) {
    name  
    }
  }
`;

export default function AddWilderForm() {
  const [name, setName] = useState("");
  const [addNewWilder, { error, loading}] = useMutation(ADD_WILDER, {refetchQueries: [GET_WILDERS]});
  if(loading) return <p>Loading</p>
  if(error) return <p>Error</p> 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewWilder({variables: {name: name}});
      }}>
      <h3>Add Wilder</h3>
      <label>Name </label>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
