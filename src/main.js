// 1. 아이디 중복 체크

// 2. 비밀번호 체크 기능

// 3. 가입 기능
let idList = [];
let submit = document.getElementById('submit__join').addEventListener('click', submitMember);

function submitMember() {
  let newId = document.getElementById('member__id').value;
  let newPw = document.getElementById('member__Pw').value;
  let newMember = { id: newId, pw: newPw };
  idList.push(newMember);
  alert('가입을 완료했습니다.');
  document.getElementById('member__id').value = '';
  document.getElementById('member__Pw').value = '';
}
