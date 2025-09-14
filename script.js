const headerElement = document.createElement('header');
const headerImg = document.createElement('img');
headerImg.src = 'sitelogo.png';
headerImg.alt = 'るいんの遺跡';
headerImg.style.cursor = 'pointer';
headerImg.onclick = function () {
    location.href = 'index.html';
};
headerElement.appendChild(headerImg);

const headerParagraph = document.createElement('p');
headerParagraph.textContent = '奏色瑠音のホームページ';
headerElement.appendChild(headerParagraph);

const navElement = document.createElement('nav');
const navList = document.createElement('ul');
navList.innerHTML = `
    <li><a href="index.html">TOP</a></li>
    <li><a href="works.html">WORKS</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li style="border-right: none;"><a href="https://forms.gle/2p77JCtYXe8Rsdzz5">CONTACT</a></li>
    `;
navElement.appendChild(navList);
headerElement.appendChild(navElement);

document.body.insertBefore(headerElement, document.body.firstChild);

const leftElement = document.createElement('section');
leftElement.id = 'left';

const introElement = document.createElement('div');
introElement.id = 'intro';
const introHeading = document.createElement('h2');
introHeading.textContent = '管理人';
const introImg = document.createElement('img');
introImg.src = 'ruinicon.png';
introImg.alt = 'プロフィール画像';
introImg.style.width = '90%';
introParagraph = document.createElement('div');
introParagraph.innerHTML = `<p>名前：<ruby>奏色瑠音<rt>かないろるいん</rt></ruby><br>
とにかくゲームが好きな人。カドゲ、音ゲなどなどいろんなゲームをやってる。動画編集もやってて、YouTubeに投稿してたりする。一応ゲーム作るのが本業。`
introElement.appendChild(introHeading);
introElement.appendChild(introImg);
introElement.appendChild(introParagraph);
leftElement.appendChild(introElement);

const twitterElement = document.createElement('div');
twitterElement.id = 'twitter';
const twitterHeading = document.createElement('h2');
twitterHeading.textContent = 'X';
const twitterAnchor = document.createElement('a');
twitterAnchor.setAttribute('class', 'twitter-timeline');
twitterAnchor.textContent = 'Tweets by ruin3899';
twitterAnchor.setAttribute('href', 'https://twitter.com/ruin3899?ref_src=twsrc%5Etfw');
const twitterLink = document.createElement('script');
twitterLink.setAttribute('src', 'https://platform.twitter.com/widgets.js');
twitterLink.setAttribute('charset', 'utf-8');
twitterLink.setAttribute('async', '');
twitterElement.appendChild(twitterHeading);
twitterElement.appendChild(twitterAnchor);
twitterElement.appendChild(twitterLink);
leftElement.appendChild(twitterElement);

const mainContent = document.getElementById('main');
mainContent.parentNode.insertBefore(leftElement, mainContent);

const rightElement = document.createElement('section');
rightElement.id = 'right';

const calendarElement = document.createElement('div');
calendarElement.id = 'calendar';
const calendarHeading = document.createElement('h2');
calendarHeading.textContent = 'カレンダー';
const calendarIframe = document.createElement('iframe');
calendarIframe.src = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&showTitle=0&src=cnVpbi4zODk5OUBnbWFpbC5jb20&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%230b8043';
calendarIframe.style.border = 'solid 1px #777';
calendarIframe.width = '90%';
calendarIframe.height = '600';
calendarIframe.setAttribute('frameborder', '0');
calendarIframe.setAttribute('scrolling', 'no');
calendarElement.appendChild(calendarHeading);
calendarElement.appendChild(calendarIframe);
rightElement.appendChild(calendarElement);

const linksElement = document.createElement('div');
linksElement.id = 'links';
const linksHeading = document.createElement('h2');
linksHeading.textContent = 'リンク';
const linksList = document.createElement('ul');
linksList.innerHTML = `
    <li><a href="https://twitter.com/ruin3899" target="_blank" rel="noopener">X</a></li>
    <li><a href="http://www.youtube.com/@ruin3899" target="_blank" rel="noopener">YouTube</a></li>
    `;
linksElement.appendChild(linksHeading);
linksElement.appendChild(linksList);
rightElement.appendChild(linksElement);

mainContent.parentNode.insertBefore(rightElement, mainContent.nextSibling);

const footerElement = document.createElement('footer');
footerElement.innerHTML = `<p>Copyright &copy; 2025 奏色瑠音 All Rights Reserved.</p>`
document.body.appendChild(footerElement);
