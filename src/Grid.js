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
                if (el.component) {
                  return el.component({ data: item[el.field] });
                } else {
                  return <td>{item[el.field]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
