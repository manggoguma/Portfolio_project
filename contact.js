document.querySelector('.sendButton').addEventListener('click', function() {
    var resultElement = document.querySelector('.submitResult');
    if (resultElement.style.display === 'none' || resultElement.style.display === '') {
        resultElement.style.display = 'block';
    } else {
        resultElement.style.display = 'none';
    }
});