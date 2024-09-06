// 가입 기능
const idList = [];
let submit = document.getElementById('submit__join').addEventListener('click', submitMember);

function submitMember() {
  let newId = document.getElementById('member__id').value;
  let newPw = document.getElementById('member__pw').value;
  // let pattern = /[^a-z][A-Z][!@#$%*]/g;

  // 비밀번호 정상성 체크
  console.log('비밀번호 중복 체크');

  // if (newPw) {
  // alert('비밀번호를 규칙에 맞게 수정해주세요.');
  // } else {

  // 아이디 중복 체크
  console.log('아이디 중복 체크');
  if (idList.includes(newId)) {
    alert('중복된 아이디 입니다.');
  } else {
    idList.push(newId);
    document.getElementById('member__id').value = '';
    document.getElementById('member__pw').value = '';
    console.log(idList);
    alert('2.가입을 완료했습니다.');
  }
}
