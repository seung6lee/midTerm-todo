json_data = [
    {
        Subject: "국어",
        Plan: {
            "1st": "수",
            "2nd": "금",
            "3rd": "일",
        },
    },
    {
        Subject: "통합사회",
        Plan: {
            "1st": "화",
            "2nd": "금",
            "3rd": "일",
        },
    },
    {
        Subject: "영어",
        Plan: {
            "1st": "월",
            "2nd": "목",
            "3rd": "일",
        },
    },
    {
        Subject: "한국사",
        Plan: {
            "1st": "월",
            "2nd": "수",
            "3rd": "토",
        },
    },
    {
        Subject: "통합과학",
        Plan: {
            "1st": "월",
            "2nd": "수",
            "3rd": "금",
        },
    },
    {
        Subject: "수학",
        Plan: {
            "1st": "화",
            "2nd": "목",
            "3rd": "토",
        },
    },
    {
        Subject: "중국어",
        Plan: {
            "1st": "화",
            "2nd": "목",
            "3rd": "토",
        },
    },
];
const today = new Date();
const dDay = new Date('2024-10-07'); //2024-11-07임
const year = today.getFullYear(); // 년도
const month = today.getMonth() + 1; // 월
const date = today.getDate(); // 날짜
const day = ["일", "월", "화", "수", "목", "금", "토"][today.getDay() - 1]; // 요일

const day_gap = dDay - today;
const leftDay = Math.floor(day_gap / (1000*60*60*24)) + 1;

const dDaytext = document.createElement('h1')
dDaytext.innerText = `D - ${leftDay}`
document.body.appendChild(dDaytext)


let todoLi = { "1st": [], "2nd": [], "3rd": [] };

for (let i of json_data) {
    for (let j in i.Plan) {
        if (i.Plan[j] == day) {
            todoLi[j].push(i.Subject);
        }
    }
}

for (i in todoLi) {
    if (todoLi[i].length == 0) {
        continue;
    }

    const box = document.createElement("div");
    box.id = i;

    let name, desc;
    name = document.createElement("h1");
    name.innerText = i;
    desc = document.createElement("p");
    desc.innerText = ': ' + [
        "개념, 내용 분석",
        "분석 내용 바탕으로 2차 공부",
        "요약 & 암기",
    ][["1st", "2nd", "3rd"].indexOf(i)];

    box.appendChild(name);
    box.appendChild(desc);

    let item;
    for (j of todoLi[i]) {
        item = document.createElement("div");
        item.innerText = j;
        box.appendChild(item);
    }

    document.body.appendChild(box);
}
