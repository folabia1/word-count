import React from 'react';
import { FilterButton } from './FilterButton';

export function Filters(props) {
  const filters = {
    anyCharacters: /^.+$/,
    lettersOnly:   /^[A-Za-z]+[.?!,:;]?$/,
    alphaNumeric:  /^[A-Za-z0-9]+[.?!,:;]?$/,
  }

  const handleClick = (event) => {
    props.onClick({"name": event.target.value, "regex": filters[event.target.value]})
  }


  return (
    <div className="Filters">
      {Object.keys(filters).map(filterName => <FilterButton onClick={handleClick} key={filterName} filterName={filterName} isSelected={props.currentFilter["name"] === filterName}/>)}
    </div>
  )
}