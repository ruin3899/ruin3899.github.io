function makeNews(newsArray, num) {
    const newsElement = document.createElement('article');
    newsElement.className = 'news';
    const newsHeading = document.createElement('h2');
    newsHeading.textContent = newsArray[num][0];
    const newsParagraph = document.createElement('p');
    newsParagraph.textContent = newsArray[num][1];
    const newsDate = document.createElement('p');
    newsDate.className = 'date';
    newsDate.textContent = newsArray[num][2];
    newsElement.appendChild(newsHeading);
    newsElement.appendChild(newsParagraph);
    newsElement.appendChild(newsDate);
    mainElement.appendChild(newsElement);
}

const parentElement = document.createElement('main');
const mainElement = document.createElement('section');
mainElement.id = 'main';
const mainHeader = document.createElement('h1');
mainHeader.textContent = 'ニュース';
mainElement.appendChild(mainHeader);
/* ニュースの内容 見出し、本文、日付 */
const newsArray = [
    ['MacにはなくてWindowsにはある機能', '気づいたらファイルが山積みになっているダウンロードフォルダ．Windowsだったら時間がたてば自動削除するように設定できるんですけど，macだったらできないんですよね．というわけで，ダウンロードフォルダの内容物を全て消す実行ファイルを作ってみました．一応WORKSのところに入れとくので使ってみてください．', '2026/01/07'],
    ['クイズのアップデート', 'かなり今更ですが、クイズゲームをアップデートしました。1ミスで終わるモード作って、問題数も増やしました。いつかRPG風にしてみたいなぁ。', '2025/10/13'],
    ['WORKSページ作成', '作品紹介用のページを作りました。上のメニューのWORKSから飛べます。まだ1本しかありませんが、作り次第追加していきます。', '2025/09/16'],
    ['ホームページシステム変更', 'ホームページをHTMLに直接書く形からJavaScriptから要素を作る形に変更しました！作業簡略化などのメリットがあります。なお、見た目は全く変わっていません。', '2025/09/14'],
    ['ホームページ開設しました！', '作品を紹介する用のホームページを開設しました。作業風景等のブログも公開しようと思います。更新をお楽しみに！', '2025/09/12']
    ];
for (let i = 0; i < newsArray.length; i++) {
    makeNews(newsArray, i);
}
parentElement.appendChild(mainElement);
document.body.appendChild(parentElement);
