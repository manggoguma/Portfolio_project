document.addEventListener('DOMContentLoaded', function() {
    // 전송 버튼 요소를 가져옵니다.
    var sendButton = document.querySelector('.sendButton');
    // 결과 메시지 요소를 가져옵니다.
    var submitResult = document.querySelector('.submitResult');

    // 버튼 클릭 시 동작하는 함수를 정의합니다.
    sendButton.addEventListener('click', function() {
        // 결과 메시지를 보여줍니다.
        submitResult.style.display = 'block';
    });
});

