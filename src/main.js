// 가입 기능
let idList = [];
let submit = document.getElementById('submit__join').addEventListener('click', submitMember);

function submitMember() {
  let newId = document.getElementById('member__id').value;
  let newPw = document.getElementById('member__pw').value;

  // 비밀번호 정상성 체크
  if (newPw) {
    alert('비밀번호를 규칙에 맞게 수정해주세요.');
  } else {
    // 아이디 중복 체크
    if (idList.length <= 0) {
      let newMember = [newId, newPw];
      idList.push(newMember);
      alert('가입을 완료했습니다.');
      document.getElementById('member__id').value = '';
      document.getElementById('member__Pw').value = '';
    } else {
      for (i = 0; i < idList.length; i++) {
        if (newId == idList[i][0]) {
          alert('중복된 아이디 입니다.');
        } else {
          let newMember = [newId, newPw];
          idList.push(newMember);
          alert('가입을 완료했습니다.');
          document.getElementById('member__id').value = '';
          document.getElementById('member__Pw').value = '';
        }
      }
    }
  }
  console.log('submitMember 실행!');
}
