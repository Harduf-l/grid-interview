import React from "react";

const Grid = ({ config, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((el) => {
            return <th>{el.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {config.map((el) => {
                return el.component ? (
                  <td>{el.component({ data: item[el.field] })}</td>
                ) : (
                  <td>{item[el.field]}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
