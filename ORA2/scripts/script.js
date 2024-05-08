var originalStudentInfo={
    fullName : 'Phan Bá Trường',
    studentId : '20215498',
    sex : 'Nam',
    yearEntering : 2021,
    program: 'Khoa học máy tính',
    class : '04',
    eduType : 'Đại học đại trà',
    school : 'Trường Công nghệ thông tin và Truyền thông',
    course : 66,
    email : 'truong.pb215498@sis.hust.edu.vn',
    status : 'Học'
};
var studentInfo={
    fullName : 'Phan Bá Trường',
    studentId : '20215498',
    sex : 'Nam',
    yearEntering : 2021,
    program: 'Khoa học máy tính',
    class : '04',
    eduType : 'Đại học đại trà',
    school : 'Trường Công nghệ thông tin và Truyền thông',
    course : 66,
    email : 'truong.pb215498@sis.hust.edu.vn',
    status : 'Học'
};


const loadData = () =>{
    if(localStorage.getItem("studentInfo") ===  null){
        const jsonStudentInfo = JSON.stringify(studentInfo);
        localStorage.setItem("studentInfo", jsonStudentInfo);
    }
    studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
}

const LoadPage = () => {
    loadData();
    loadView();
}

const loadView = () =>{
    const viewElement = document.getElementById("view-info-student");
    const editElement = document.getElementById("edit-info-student");
    viewElement.style.display= "block";
    editElement.style.display= "none";
    document.getElementById('fullNametitle').innerHTML = studentInfo.fullName;
    const listInfo =['fullName','studentId','sex','yearEntering','eduType','school','course','email','status'];
    for(let i=0; i<listInfo.length; i++){
        let infoElement = document.querySelectorAll(`#${listInfo[i]}`)[0];
        infoElement.innerHTML = studentInfo[listInfo[i]];
    }
    document.querySelectorAll('#class')[0].innerHTML = `${studentInfo.program} ${studentInfo.class} - K${studentInfo.course}`;
    document.querySelectorAll('#program')[0].innerHTML = `${studentInfo.program} ${studentInfo.yearEntering}`;
}
const changeButton = () => {
    loadEdit();
}


// Change Page
const eduTypes = ['Đại học đại trà','Chương trình tiên tiến','Kĩ sư chuyên sâu','Thạc sĩ'];
const schools = ['Trường Công nghệ thông tin và Truyền thông', 'Trường Cơ khí', 'Trường Điện - Điện tử', 'Trường Hóa và Khoa học sự sống', 'Trường Vật liệu', 'Viện Ngoại ngữ']
const programs = ['Khoa học máy tính', 'Kĩ thuật máy tính', 'An toàn không gian số', 'Khoa học dữ liệu và trí tuệ nhân tạo', 'Công nghệ thông tin Việt- Nhật']
const listStatus = ['Học', 'Bảo lưu', 'Đã tốt nghiệp', 'Buộc thôi học'];

// Functions load data for input
const inputEdutype = () =>{
    var eduTypeElements = document.querySelectorAll("#eduType");
    for(let i=0; i < eduTypes.length; i++){
        let option = document.createElement("option");
        option.value = eduTypes[i];
        option.text = eduTypes[i];
        eduTypeElements[1].appendChild(option);
    }
    eduTypeElements[1].value = studentInfo.eduType;
}
const inputSchool = () =>{
    var schoolElements = document.querySelectorAll("#school");
    for(let i=0; i < schools.length; i++){
        let option = document.createElement("option");
        option.value = schools[i];
        option.text = schools[i];
        schoolElements[1].appendChild(option);
    }
    schoolElements[1].value = studentInfo.school;
}
const inputProgram = () => {
    var programElements = document.querySelectorAll("#program");
    for(let i=0; i < programs.length; i++){
        let option = document.createElement("option");
        option.value = programs[i];
        option.text = programs[i];
        programElements[1].appendChild(option);
    }
    programElements[1].value = studentInfo.program;
}
const inputSex = () =>{
    if(studentInfo.sex === 'Nam'){
        document.querySelector('#male').checked = true;
    } else {
        document.querySelector('#female').checked = true;
    }
}
const inputStatus = () =>{
    var statusElements = document.querySelectorAll("#status");
    for(let i=0; i < listStatus.length; i++){
        let option = document.createElement("option");
        option.value = listStatus[i];
        option.text = listStatus[i];
        statusElements[1].appendChild(option);
    }
    statusElements[1].value = studentInfo.status;
}
//Load Page
const loadEdit = () =>{
    const viewElement = document.getElementById("view-info-student");
    const editElement = document.getElementById("edit-info-student");
    viewElement.style.display = "none";
    editElement.style.display = "block";

    loadData();
    document.getElementById("fullNametitle").innerHTML = studentInfo.fullName;
    const listInfo =['fullName','studentId','yearEntering','course','email','class'];
    for(let i = 0; i< listInfo.length; i++){
        document.querySelectorAll(`#${listInfo[i]}`)[1].value = studentInfo[listInfo[i]];
    }
    inputEdutype();
    inputSchool();
    inputProgram();
    inputSex();
    inputStatus();
}
// Submit Change Info
const submitChange = () =>{
    const listInfo =['fullName','yearEntering','eduType','program','school','status','class','course','email','studentId'];
    for(let i = 0; i<listInfo.length; i++){
        studentInfo[listInfo[i]] = document.querySelectorAll(`#${listInfo[i]}`)[1].value;
    }
    //save sex
    const maleSex = document.getElementById("male");
    const femaleSex = document.getElementById("female");
    if(maleSex.checked){
        studentInfo.sex = maleSex.value;
    } else {
        studentInfo.sex = femaleSex.value;
    }
    //save data on local storage
    const jsonStudentInfo = JSON.stringify(studentInfo);
    localStorage.setItem("studentInfo", jsonStudentInfo);
    //h
    console.log(studentInfo);
    loadView();
}

// Cancel Change Info
const cancelChange = () =>{
    console.log(studentInfo);
    loadView();
}

const resetInfo = () => {
    studentInfo = originalStudentInfo;
    const jsonStudentInfo = JSON.stringify(originalStudentInfo);
    console.log(studentInfo);
    localStorage.setItem("studentInfo", jsonStudentInfo);
    loadView();
}
