import React, { useState } from "react";

interface RowData {
  input1: string;
  input2: string;
  input3: string;
}

interface SectionComponentProps {
  containerStyle?: React.CSSProperties;
  lineStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  inputRowStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

export const SectionComponent: React.FC<SectionComponentProps> = ({
  containerStyle,
  lineStyle,
  headerStyle,
  inputRowStyle,
  inputStyle,
  buttonStyle,
}) => {
  const [rows, setRows] = useState<RowData[]>([
    {
      input1: "",
      input2: "",
      input3: "",
    },
  ]);

  const addRow = () => {
    setRows([...rows, { input1: "", input2: "", input3: "" }]);
  };

  return (
    <div style={containerStyle}>
      <hr style={lineStyle} />
      <h2 style={headerStyle}>Section Header</h2>

      {rows.map((row, index) => (
        <div key={index} style={inputRowStyle}>
          <input
            type="text"
            value={row.input1}
            onChange={(e) => {
              const newRows = [...rows];
              newRows[index].input1 = e.target.value;
              setRows(newRows);
            }}
            placeholder="Input 1"
            style={inputStyle}
          />
          <input
            type="text"
            value={row.input2}
            onChange={(e) => {
              const newRows = [...rows];
              newRows[index].input2 = e.target.value;
              setRows(newRows);
            }}
            placeholder="Input 2"
            style={inputStyle}
          />
          <input
            type="text"
            value={row.input3}
            onChange={(e) => {
              const newRows = [...rows];
              newRows[index].input3 = e.target.value;
              setRows(newRows);
            }}
            placeholder="Input 3"
            style={inputStyle}
          />
        </div>
      ))}

      <button style={buttonStyle} onClick={addRow}>
        Add Row
      </button>
    </div>
  );
};
