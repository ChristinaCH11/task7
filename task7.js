var img1 = new Image();
img1.src = "https://i2.wp.com/testderz.com/wp-content/uploads/2018/03/1.png";
let img2 = new Image();
img2.src = "https://lh3.googleusercontent.com/proxy/lWWIDNwekL67tXcevusydVOa-TJi6vM2AD2NeDb-D1HA8lC01BNyuItGKhqGhmc9G4WfjXlmyVQN2kaSMJM";
let img3 = new Image();
img3.src = "https://i.ibb.co/H4y5CVL/3.png";
let img4 = new Image();
img4.src = "https://i.ibb.co/YjxLW0H/4.png";
let img5 = new Image();
img5.src = "https://i.ibb.co/rv8098R/5.png";
let quest = [img1, img2, img3, img4, img5];
let right_answer = [a2, a3, a1, a4, a2]
let num_img = 0;
let num_ans = 0;
let sum = 0;
document.body.appendChild(quest[num_img]);
btn.addEventListener("click", fnc);
        function fnc(){
            document.body.removeChild(quest[num_img]);
            num_img++;
            document.body.appendChild(quest[num_img]);
        }
btn.addEventListener("click", fnc1);
function fnc1(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    console.log(a5.checked);
    if (right_answer[num_ans].checked){
        alert("Вірна відповідь");
        sum++;
    } else {
        alert("Невірна відповідь");
    }
    
    num_ans++;
if (num_ans == right_answer.length){
    document.body.remove(table);
    alert("Правильних відповідей:" + sum);
}
}
