// 가입 기능
const idList = [];
let submit = document.getElementById('submit__join').addEventListener('click', submitMember);

function submitMember() {
  let newId = document.getElementById('member__id').value;
  let newPw = document.getElementById('member__pw').value;
  let pattern = /([a-z]|[A-Z]|[0-9]|[!@#%&])/g;
  let result = newPw.match(pattern);

  // 비밀번호 정상성 체크
  if (newPw.length > 14) {
    alert('비밀번호는 8~14자여야 합니다.');
  } else if (result.length !== newPw.length) {
    alert('영문 대소문자, 숫자, 특수문자(!@#%&)로만 비밀번호를 만들어주세요.');
  } else {
    // 아이디 중복 체크
    if (idList.includes(newId)) {
      alert('중복된 아이디 입니다.');
    } else {
      idList.push(newId);
      document.getElementById('member__id').value = '';
      document.getElementById('member__pw').value = '';
      console.log(idList);
      alert('가입을 완료했습니다.');
    }
  }
}
