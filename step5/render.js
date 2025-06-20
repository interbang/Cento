
const renderBody = (data) => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    for (const [key, value] of Object.entries(obj)) {

      if (key === "kword") {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = `<b>${value}</b>`;
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
      if (key === "pArray") {
        for (let k = 0; k < value.length; k++) {
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.textContent = value[k];
          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      }
      
    }
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "Shuffle Lines";
      button.dataset.poemIndex = index;
      td.appendChild(button);
      tr.appendChild(td);
      tbody.appendChild(tr); 
      const trspace = document.createElement("tr");
      const tdspace = document.createElement("td");
      tdspace.innerHTML = `<div>&nbsp;</div>`;
      trspace.appendChild(tdspace);
      tbody.appendChild(trspace);
      
  });
  
  table.appendChild(tbody);
  return table;
};

const renderTbl = (data) => {
  const TBL = document.getElementById("table");
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderBody(data);
    TBL.appendChild(table);
  }
};

export { renderBody, renderTbl };
