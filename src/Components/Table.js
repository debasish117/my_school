import React from "react";

export default function Table(props) {
  console.log(props.items);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
          </tr>
        </thead>
        {props.items.map((item) => {
          return <tbody key={item.id}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
            </tr>
          </tbody>
        })}
      </table>
    </div>
  );
}
