"use strict";

const tableControls = document.querySelectorAll(".event-nav-btn");
const curriculumTitle = document.querySelectorAll(".curriculum-title");
const curriculumContainer = document.querySelectorAll(
  ".curriculum-category-container"
);

const allTables = document.querySelectorAll(".event-table");

var tables = {
  table1: [],
  table2: [],
  table3: [],
};

var controls = {
  control1: [],
  control2: [],
  control3: [],
};

const icons = [];

curriculumTitle.forEach((eachtitle, index) => {
  const child = eachtitle.children;
  const icon = child[0];
  icons.push(icon);
  eachtitle.addEventListener("click", () => {
    curriculumContainer.forEach(
      (eachContainer) => (eachContainer.style.display = "none")
    );

    const containerChildren = curriculumContainer[index].children;
    console.log(containerChildren);

    if (icon.classList.contains("fa-plus")) {
      icons.forEach((icon) => {
        if (icon.classList.contains("fa-minus")) {
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        }
      });

      console.log("It's closed. Now let's open it");
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      curriculumContainer[index].style.display = "block";

      containerChildren.forEach((child) => {
        if (child.classList.contains("event-table")) {
          tables[`table${index + 1}`].push(child);
          console.log("here");
        } else {
          child.children.forEach((innerchild) => {
            controls[`control${index + 1}`].push(innerchild);
          });
        }
      });
      const arrayTable = tables[`table${index + 1}`];
      console.log(arrayTable);
      arrayTable[0].classList.add("active-table");

      const controlTable = controls[`control${index + 1}`];
      console.log(controlTable);
      controlTable[0].classList.add("active-control");

      // console.log(tables);
      // console.log(controls);
    } else {
      console.log("It's open. Let's close it");
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      curriculumContainer[index].style.display = "none";
      // tables[`table${index + 1}`] = [];
      // controls[`control${index + 1}`] = [];
      // console.log(tables);
      // console.log(controls);
    }
  });
});

tableControls.forEach((eachcontrol, index) => {
  eachcontrol.addEventListener("click", () => {
    tables["table1"] = [];
    tables["table2"] = [];
    tables["table3"] = [];

    controls["control1"] = [];
    controls["control2"] = [];
    controls["control3"] = [];

    console.log("1111111111111111");

    tableControls.forEach((eachcontrol) => {
      eachcontrol.classList.remove("active-control");
    });

    eachcontrol.classList.add("active-control");

    allTables.forEach((eachtable) => {
      eachtable.classList.remove("active-table");
    });

    allTables[index].classList.add("active-table");
  });
});
