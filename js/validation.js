/*
validation : 인증함수??
조건을 정해서 만족하면 return true;
조건에 만족하지 않으면 return false;

판별하는 시점이 submit을 클릭할 때 
인증함수의 결과값이 하나라도 false라는게 나온다면 action으로 넘어가지 못하데
e.preventDefault(); 으로 막습니다
모두 참이면 그때 action으로 이동
*/

const btnSubmit = document.querySelector("input[type=submit]");
let toggleBtn = document.getElementById("toggleBtn");
let pwd = document.querySelector("#pwd1");

btnSubmit.addEventListener("click",()=>{
    // 인증함수들을 거쳐서 true 혹은 false를 가지고 validation을 진행
})

toggleBtn.addEventListener("click",()=>{
    // 클릭했을 때 password type을 text로 변경해서 비밀번호가 보이도록
    if(pwd.type === 'password'){
        pwd.setAttribute("type","text");
        toggleBtn.classList.add("hide");
    }else{
        pwd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }
})