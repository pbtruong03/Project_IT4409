var studentInfo = {};
const loadData = () => {};

const loadPage = () => {};

const savePDF = () => {
  let pdfSec = $("#studentInfo").html();
  var opt = {
    margin: 0.5,
    filename: "PhanBaTruong_20215498.pdf",
    image: {
      type: "jpeg",
      quality: 0.95,
    },
    html2canvas: {
      scale: 2,
    },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
    },
  };
  let status = html2pdf().from(pdfSec).set(opt).save();
};
// ------ Process Info Item ------//
const keyPress = (event) => {
  if (event.key === "Enter") {
    event.target.blur();
  }
};

const changeContent = (event) => {
  // Get Elements
  var parentE = event.target.parentElement;
  var displayE = parentE.querySelector("span");
  var inputE = parentE.querySelector("input");
  // Set display
  displayE.style.display = "none";
  inputE.style.display = "inline";
  inputE.focus();
};

const saveContent = (event) => {
  // Get Elements
  var parentE = event.target.parentElement;
  var displayE = parentE.querySelector("span");
  var inputE = parentE.querySelector("input");
  // Save Info
  displayE.innerHTML = inputE.value;
  // Set display
  displayE.style.display = "inline";
  inputE.style.display = "none";
};

const delItem = (event) => {
  var itemE = event.target.parentElement;
  var groupE = itemE.parentElement;
  var str =
    "Phan Bá Trường 20215498\nBạn có chắc muốn xóa trường thông tin: " +
    event.target.parentElement.querySelector(".infoName").textContent.trim();
  var confirmDel = confirm(str);
  if (confirmDel) {
    groupE.removeChild(itemE);
  }
};

var itemContainer = document.querySelector(".itemContainer");
const addItem = (event) => {
  var groupE = event.target.parentElement.parentElement.parentElement;
  itemContainer = groupE.querySelector(".itemContainer");
  document.querySelector(".chooseType").style.display = "block";
  // itemContainer.insertAdjacentHTML(
  //   "beforeend",
  //   `<div class="infoItem">
  //     <div class="infoContainer">
  //       <div class="infoName">
  //         <span ondblclick="changeContent(event)">Item Info Name</span>
  //         <input onblur="saveContent(event)" onkeypress="keyPress(event)" class="hidden" type="text" value="Item Info Name">
  //       </div>
  //       <div class="infomation">
  //         <span ondblclick="changeContent(event)">Item Info Content</span>
  //         <input onblur="saveContent(event)" onkeypress="keyPress(event)" class="hidden" type="text" value="Item Info Content">
  //       </div>
  //     </div>
  //     <button class="btn-icon" onclick="delItem(event)"><i class="fa-solid fa-trash"></i></button>
  //   </div>`
  // );
};

// ------ Process Group Info ------//
const delGroup = (event) => {
  var groupE = event.target.parentElement.parentElement.parentElement;
  var parentGroup = document.querySelector(".right-ContentPanel");
  var confirmDel = confirm(
    "Phan Bá Trường 20215498\nBạn có chắc muốn xóa Group: " +
      event.target.parentElement.parentElement.querySelector(".groupName")
        .textContent
  );
  if (confirmDel) {
    parentGroup.removeChild(groupE);
  }
};

const changeNameGroup = (event) => {
  var displayE = event.target;
  var inputE = displayE.parentElement.querySelector("input");
  // Set Display
  displayE.style.display = "none";
  inputE.style.display = "inline";

  inputE.focus();
};

const saveNameGroup = (event) => {
  var inputE = event.target;
  var displayE = inputE.parentElement.querySelector(".groupName");
  // Save Name
  displayE.innerHTML = inputE.value;
  // Set Display
  displayE.style.display = "inline";
  inputE.style.display = "none";
};

const addGroup = () => {
  var parentGroup = document.querySelector(".right-ContentPanel");
  parentGroup.insertAdjacentHTML(
    "beforeend",
    `<div class="groupItem">
      <div class="titleGroup">
          <h3 class="groupName" ondblclick="changeNameGroup(event)">Group Item</h3>
          <input onblur="saveNameGroup(event)" onkeypress="keyPress(event)" class="hidden" type="text" value="Group Item">
          <h3 class="groupName">_20215498</h3>
          <div class="buttonContainer">
            <button class="btn-icon" onclick="delGroup(event)"><i class="fa-solid fa-trash"></i></button>
            <button class="btn" onclick="addItem(event)">Add Info Item</button>
            <button class="btn" onclick="addGroup()">Add Group Item</button>
          </div>
      </div>
      <div class="itemContainer">
      </div>
    </div>`
  );
};

//////////// change type

const changeType = () => {
  var typeSelectionE = document.getElementById("inputType");
  if (typeSelectionE.value === "radio") {
    console.log("radio");
  } else if (typeSelectionE.value === "selection") {
    console.log("selection");
  } else {
    console.log("other");
  }
};

const createItem = () => {
  var typeInput = document.getElementById("inputType").value;
  var valueInput;
  if (typeInput === "text") {
    valueInput = "Item Info Content";
  } else if (typeInput === "email") {
    valueInput = "email@doimain.com";
  } else if (typeInput === "number") {
    valueInput = "0";
  } else {
    valueInput = "1971-01-01";
  }
  itemContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="infoItem">
      <div class="infoContainer">
        <div class="infoName">
          <span ondblclick="changeContent(event)">Item Info Name</span>
          <input onblur="saveContent(event)" onkeypress="keyPress(event)" class="hidden" type="text" value="Item Info Name">
        </div>
        <div class="infomation">
          <span ondblclick="changeContent(event)">${valueInput}</span>
          <input onblur="saveContent(event)" onkeypress="keyPress(event)" class="hidden" type="${typeInput}" value="${valueInput}">
        </div>
      </div>
      <button class="btn-icon" onclick="delItem(event)"><i class="fa-solid fa-trash"></i></button>
    </div>`
  );
  document.querySelector(".chooseType").style.display = "none";
};

const cancelCreateItem = () => {
  document.querySelector(".chooseType").style.display = "none";
};
