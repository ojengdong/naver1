// input에 focus가 in 됐을 때 
// 그것의 부모 .inputbox에게 .inputact 클래스를 준다. (border)
$("input").focusin(function(){
    $(this).parent('.inputbox').addClass('inputboxact');
})


// input에 focus가 out 됐을 때 
// 그것의 부모 .inputbox에게 .inputact 클래스를 없애준다. (border)
$("input").focusout(function(){
    // inputboxact 클래스를 remove
    $(this).parent('.inputbox').removeClass('inputboxact');
})

let idveri,pwveri, pwchkveri, nameveri, birthveri, genderveri, phoneveri, addressveri = false;
let mailveri = true;

// 아이디
// #userid input에서 focusout 됐을 때 그것의 글자수가 0이라면 (조건)
// #userid .warn에 '필수 정보 입니다' 라고 쓴다 (실행문)
// #userid .warn에 '5~20자의 영소문자만 사용 가능합니다.' 라고 쓴다 (실행문1)
// len이 5보다 작거나 20보다 끌 때 (조건2) - 논리연산자 사용 or ||
$("#userid input").focusout(function(){
    let len = $(this).val().length;
    idveri = false;
    if(len == 0) {
        $("#userid .warn").html('<span class="text-red">필수 정보 입니다.</span>');
    } else if(len < 5 || len > 20) {
        $("#userid .warn").html('<span class="text-red">5~20자의 영소문자만 사용 가능합니다.</span>');
    } else {
        $("#userid .warn").html('<span class="text-green">멋진 아이디네요!</span>');
        idveri = true;
    }
})

// 비밀번호
// #userpw input에서 focusout 됐을 때 그것의 글자수가 0이라면 (조건)
// #userid .warn에 '필수 정보 입니다.' 라고 쓴다 (실행문1)
$("#userpw input").focusout(function(){
    let len = $(this).val().length;
    pwveri = false;
    if(len == 0) {
        $("#userpw .warn").html('<span class="text-red">필수 정보 입니다.</span>');
        $("#userpw .inputbox img").attr("src", "images/m_icon_pw_step_01.png");
        $("#userpw .inputbox span").empty();
    } else if(len < 8 || len > 16) {
        $("#userpw .warn").html('<span class="text-red">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>');
        $("#userpw .inoutbox p").html('<span class="text-red">사용불가</span>');
        $("#userpw .inputbox img").attr("src", "images/m_icon_pw_step_10.png");
    } else {
        pwveri = true 
        // #userpw . warn 안에 내용을 비운다 -> empty() 사용
        // #userpw.inputbox p 한테 '안전'
        // #userpw.inputbox img src 경로 -> imges/m_icon_pw_step_04.png
        $("#userpw .warn").empty();
        $("#userpw .inputbox p").html('<span class="text-green">안전</span>');
        $("#userpw .inputbox img").attr("src", "images/m_icon_pw_step_04.png");
    }
})

//  비밀번호 재확인
// #userpw-chk input 에서 focusout 됐을 때 value값의 length가 0이라면 (조건1)
// #userpw-chk .warn에 빨간 글씨로 "필수 정보입니다." (실행문1)
// #userpw-chk .inputbox img의 속성중에 src 경로 값을 변경 (실행문2)

// 그렇지 않다면 그것의 값과 #userpw input 안에 들어 있는 값이 같은가? (조건2)
// #userpwchk 변수를 true로 변경(실행문1)
// #userpw-chk .warn에 empty()로 비운다.(실행문2)


// 그렇지 않다면 else
// #userpw-chk .warn '비밀번호가 일치하지 않습니다.' (실행문1)
// #userpw-chk .inputbox img src -> ./images/m_icon_pw_step_02.png 변경
$("#userpw-chk input").focusout(function(){
    let userpwchk = $(this).val();
    if(userpwchk.length == 0) {
        $("#userpw-chk .warn").html('<span class="text-red">필수 정보입니다.</span>');
        $("#userpw-chk .inputbox img").attr("src", "./images/m_icon_pw_step_02.png");
    }else if (userpwchk == $("#userpw input").val()) {
        pwchkveri = true;
        // remove / empty
        // remove 요소 자체를 지우고 empty 요소 안 내용을 지운다.
        $("#userpw-chk .warn").empty();
        $("#userpw-chk .inputbox img").attr("src", "./images/m_icon_pw_step_07.png");
    }else {
        $("#userpw-chk .warn").html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>');
        $('#userpw-chk .inputbox img').attr("src", "./images/m_icon_pw_step_02.png");
    }
})