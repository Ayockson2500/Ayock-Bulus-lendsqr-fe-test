
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);
  return (
    <div className="globalSearchInput">
      <div className='InputContainer'>
      <input
        type="text"
        placeholder="Search Entire Table..."
        autoFocus={true}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      </div>
    </div>
  );
};
