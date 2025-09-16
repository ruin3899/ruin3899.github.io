const mainElement = document.createElement('main');
const mainSection = document.createElement('section');
mainSection.id = 'main';
const mainHeading = document.createElement('h1');
mainHeading.textContent = '作品集';
mainSection.appendChild(mainHeading);

/* 作品のタイトル、本文、リンク、画像URL */
const worksArray = [
    ['東方projectクイズ', '東方projectに関する4択クイズです。問題は順次更新中！君は全問正解できるか！？是非挑戦してみてね！！', 'https://ruin3899.github.io/touhouquiz/', 'img/touhouquiz.png'],
];
for (let i = 0; i < worksArray.length; i++) {
    const workElement = document.createElement('table');
    workElement.className = 'work';

    const row1 = document.createElement('tr');
    const row2 = document.createElement('tr');
    const row3 = document.createElement('tr');

    const col0 = document.createElement('td');
    col0.className = 'workImage';
    col0.rowSpan = '3';
    const workImg = document.createElement('img');
    workImg.src = worksArray[i][3];
    workImg.alt = worksArray[i][0];
    workImg.className = 'workImg';
    col0.appendChild(workImg);
    row1.appendChild(col0);

    const col1 = document.createElement('td');
    col1.className = 'workTitle';
    col1.textContent = worksArray[i][0];
    row1.appendChild(col1);
    const col2 = document.createElement('td');
    col2.className = 'workDescription';
    col2.textContent = worksArray[i][1];
    row2.appendChild(col2);
    const col3 = document.createElement('td');
    col3.className = 'workLink';
    col3.textContent = worksArray[i][2];
    row3.appendChild(col3);

    workElement.appendChild(row1);
    workElement.appendChild(row2);
    workElement.appendChild(row3);

    workElement.addEventListener('click', () => {
        window.open(worksArray[i][2], '_blank');
    });
    mainSection.appendChild(workElement);
}
mainElement.appendChild(mainSection);
document.body.appendChild(mainElement);