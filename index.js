$(document).ready(function () {
    renderCurrentTime()
});

//현재 시간
function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
    fetch(url)
        .then(res => res.json()).then((data) => {
                            // 코드를 입력하는 곳!
        })
}
$(document).ready(function () {
    renderCurrentTime()
    renderQuote()
});

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json()).then((data) => {
            // 코드를 입력하는 곳!
        })
}