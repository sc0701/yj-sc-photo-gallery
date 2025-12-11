const CONFIG = {
    // 1. 기본 정보
    names: "유진 <span class='heart'>❤</span> 승찬", // 이름
    startDate: "2025-12-06", // 사귄 날짜 (YYYY-MM-DD)
    
    // 2. 앨범 목록
    albums: [
        { name: "2025.12", folder: "2025.12"},
        // { name: "2026.01", folder: "2026.01" },
    ],

    // 3. [NEW] 타임라인/히스토리
    timeline: [
        { date: "2025.12.06", title: "우리의 시작", desc: "우리가 처음 연인이 된 날 ✨" },   
    ]

    
    // 4. 버킷리스트
    bucketList: [
        { text: "클라이밍 하기", done: false },   // done: true 로 바꾸면 완료 처리됨
        { text: "함께 영화보기", done: false },
        { text: "커플 페이지 예쁘게 꾸미기", done: true }, // 이건 지금 하고 있으니 완료!
        { text: "야구장 직관 가기", done: false },
        { text: "겨울 설산 등산하기", done: false },
        { text: "교복 입고 놀이공원 데이트", done: false },
        { text: "함께 해외여행 떠나기", done: false },
        { text: "서로 반지 만들어주기", done: false },
        { text: "불멍 때리며 글램핑하기", done: false },
        { text: "매달 인생네컷 찍기", done: false },
    ]
};

