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



const loadPage = () =>{
    loadData();
    document.getElementById('fullNametitle').innerHTML = studentInfo.fullName;
    const listInfo =['fullName','studentId','sex','yearEntering','eduType','school','course','email','status'];
    for(let i=0; i<listInfo.length; i++){
        let infoElement = document.getElementById(listInfo[i]);
        infoElement.innerHTML = studentInfo[listInfo[i]];
    }
    document.getElementById('class').innerHTML = `${studentInfo.program} ${studentInfo.class} - K${studentInfo.course}`;
    document.getElementById('program').innerHTML = `${studentInfo.program} ${studentInfo.yearEntering}`;
}
const changeButton = () => {
    location.assign('editinfo.html');
}


// Change Page
const eduTypes = ['Đại học đại trà','Chương trình tiên tiến','Kĩ sư chuyên sâu','Thạc sĩ'];
const schools = ['Trường Công nghệ thông tin và Truyền thông', 'Trường Cơ khí', 'Trường Điện - Điện tử', 'Trường Hóa và Khoa học sự sống', 'Trường Vật liệu', 'Viện Ngoại ngữ']
const programs = ['Khoa học máy tính', 'Kĩ thuật máy tính', 'An toàn không gian số', 'Khoa học dữ liệu và trí tuệ nhân tạo', 'Công nghệ thông tin Việt- Nhật']
const listStatus = ['Học', 'Bảo lưu', 'Đã tốt nghiệp', 'Buộc thôi học'];

// Functions load data for input
const inputEdutype = () =>{
    var eduTypeElement = document.getElementById("eduType");
    for(let i=0; i < eduTypes.length; i++){
        let option = document.createElement("option");
        option.value = eduTypes[i];
        option.text = eduTypes[i];
        eduTypeElement.appendChild(option);
    }
    eduTypeElement.value = studentInfo.eduType;
}
const inputSchool = () =>{
    var schoolElement = document.getElementById("school");
    for(let i=0; i < schools.length; i++){
        let option = document.createElement("option");
        option.value = schools[i];
        option.text = schools[i];
        schoolElement.appendChild(option);
    }
    schoolElement.value = studentInfo.school;
}
const inputProgram = () => {
    var programElement = document.getElementById("program");
    for(let i=0; i < programs.length; i++){
        let option = document.createElement("option");
        option.value = programs[i];
        option.text = programs[i];
        programElement.appendChild(option);
    }
    programElement.value = studentInfo.program;
}
const inputSex = () =>{
    if(studentInfo.sex === 'Nam'){
        document.querySelector('#male').checked = true;
    } else {
        document.querySelector('#female').checked = true;
    }
}
const inputStatus = () =>{
    var statusElement = document.getElementById("status");
    for(let i=0; i < listStatus.length; i++){
        let option = document.createElement("option");
        option.value = listStatus[i];
        option.text = listStatus[i];
        statusElement.appendChild(option);
    }
    statusElement.value = studentInfo.status;
}
//Load Page
const loadEditPage = () =>{
    loadData();
    document.getElementById("fullNametitle").innerHTML = studentInfo.fullName;
    const listInfo =['fullName','studentId','yearEntering','course','email','class'];
    for(let i = 0; i< listInfo.length; i++){
        document.getElementById(listInfo[i]).value = studentInfo[listInfo[i]];
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
        studentInfo[listInfo[i]] = document.getElementById(listInfo[i]).value;
        console.log(`Save: ${listInfo[i]} : ${document.getElementById(listInfo[i]).value}`)
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
    location.assign('index.html');
}

// Cancel Change Info
const cancelChange = () =>{
    location.assign('index.html');
}