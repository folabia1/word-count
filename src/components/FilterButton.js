import React from "react";

export function FilterButton(props) {
  return (
    <button className="FilterButton"
      key={props.filterName}
      value={props.filterName}
      onClick={props.onClick}
      style={props.isSelected ? {backgroundColor: "red"} : {backgroundColor: "grey"}}
    >
      {props.filterName}
    </button>
  )
}

