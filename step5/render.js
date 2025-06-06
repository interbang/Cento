import {} from "./main.js";

const renderBody = (data) => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  data.forEach((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key === "firName") {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = `<span id="greeting">Greetings ${value}. Here is your poem:</span>`;
        tr.appendChild(td);
        tbody.appendChild(tr);
        const tdSpace = document.createElement("td");
        tdSpace.innerHTML = `<p>&nbsp;</p>`;
        tr.appendChild(tdSpace);
        tbody.appendChild(tr);
      }

      if (key === "kword") {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = `<b>${value}</b>`;
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
      if (key === "pArray") {
        for (let k = 0; k < 20; k++) {
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.textContent = value[k];
          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      }
    }
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
