import React from "react";

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
  deleteButtonStyle?: React.CSSProperties;
  headerText?: string;
  inputPlaceholders?: [string, string, string];
  hideAddButton?: boolean;
  hideDeleteButton?: boolean;
  rows: RowData[];
  setRows: React.Dispatch<React.SetStateAction<RowData[]>>;
}

export const SectionComponent: React.FC<SectionComponentProps> = ({
  containerStyle,
  lineStyle,
  headerStyle,
  inputRowStyle,
  inputStyle,
  buttonStyle,
  deleteButtonStyle,
  headerText = "Section Header",
  inputPlaceholders = ["Input 1", "Input 2", "Input 3"],
  hideAddButton = false,
  hideDeleteButton = false,
  rows,
  setRows,
}) => {
  const addRow = () => {
    setRows([...rows, { input1: "", input2: "", input3: "" }]);
  };

  const deleteRow = (index: number) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  return (
    <div style={containerStyle}>
      <hr style={lineStyle} />
      <h2 style={headerStyle}>{headerText}</h2>

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
            placeholder={inputPlaceholders[0]}
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
            placeholder={inputPlaceholders[1]}
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
            placeholder={inputPlaceholders[2]}
            style={inputStyle}
          />
          {!hideDeleteButton && (
            <button style={deleteButtonStyle} onClick={() => deleteRow(index)}>
              Delete
            </button>
          )}
        </div>
      ))}

      {!hideAddButton && (
        <button style={buttonStyle} onClick={addRow}>
          Add Row
        </button>
      )}
    </div>
  );
};
