var data = [
    {        
        "Skins": [
            {
                "ImageUrl": "소피아/1.png",
                "Desc": "기본"
            },
            {
                "ImageUrl": "소피아/2.png",
                "Desc": "이벤트"
            },
            {
                "ImageUrl": "소피아/3.png",
                "Desc": "서밋아레나 S7 골드스킨"
            }
        ],       
        "Name": "소피아",
        "CV": "타카하시 아오",
        "Rank": [ // 0 - SSR, 1 - SR, 2 - R, 3 - N
            1
        ],
        "SP": false,
        "Groups": [
            3, // 빛기
            5, // 공주
            10  // 초월
        ],
        "HP": 15,
        "Attk": 10,
        "Def": 35,
        "MagicDef": 35,
        "HowToGet": "영웅 소환",
        "Fetters": [ // 유대 순서를 반드시 지킬 것
            {
                "Condition": "소피아를 레벨 30 달성"
            },
            {
                "Condition": "소피아를 프로핏으로 전직"
            },
            {
                "Condition": "쥬그라의 도움 하에 '어둠 속의 공포' 클리어"
            },
            {
                "Condition": "디하르트의 도움 하에 '아름다운 수호자' 클리어"
            }
        ],
        "HeartFetter": "생명+400, 방어+30, 마방+60",
        "Talent": [
            {
                "Name": "연민의 마음",
                "Icon": "15.png",
                "Abilities": [ // 성급 순서를 반드시 지킬 것
                    {
                        "Desc": "1성"
                    },
                    {
                        "Desc": "아군 부대에게 스킬 시전 시 추가 버프 부여：받는 치료 효과 <font color=\"red\">+10%</font>,<br> 방어 <font color=\"red\">+15%</font>. <font color=\"red\">2턴</font> 지속."
                    },
                    {
                        "Desc": "아군 부대에게 스킬 시전 시 추가 버프 부여：받는 치료 효과 <font color=\"red\">+20%</font>,<br> 방어 <font color=\"red\">+17%</font>. <font color=\"red\">2턴</font> 지속."
                    },
                    {
                        "Desc": "아군 부대에게 스킬 시전 시 추가 버프 부여：받는 치료 효과 <font color=\"red\">+20%</font>,<br> 방어 <font color=\"red\">+20%</font>. <font color=\"red\">2턴</font> 지속."
                    },
                    {
                        "Desc": "아군 부대에게 스킬 시전 시 추가 버프 부여：받는 치료 효과 <font color=\"red\">+30%</font>,<br> 방어 <font color=\"red\">+25%</font>. <font color=\"red\">2턴</font> 지속."
                    },
                    {
                        "Desc": "아군 부대에게 스킬 시전 시 추가 버프 부여：받는 치료 효과 <font color=\"red\">+30%</font>,<br> 방어 <font color=\"red\">+30%</font>. <font color=\"red\">2턴</font> 지속."
                    }
                ]
            }
        ],
        "SPTalent": null,
        "Equip": {
            "Name": "성광의 베일(갑옷)",
            "Stats": "생명 583, 방어 54",
            "Icon": "소피아.png",
            "Ability": "생명 +5%</br>아군에게 스킬 시전 시 추가 버프 부여 : <br>\"공격,지력+15%\", \"마방+20%\", 2턴 지속."
        },
        "Soldiers": [
            0,
            2,
            3,
            4,
            17,
            44
        ],
        "Jobs": [
            {
                "Name": "프로핏",
                "Icon": "Icon_Occupation_Monk.png",
                "SD": [
                    {
                        "ImageUrl": "소피아/1/1.png"
                    },
                    {
                        "ImageUrl": "소피아/2/1.png"
                    },
                    {
                        "ImageUrl": "소피아/3/1.png"
                    }
                ],
                "AttkRange": 2,
                "Move": 3,
                "MoveType": "Walk", // "Walk, Ride, Fly, Water, FieldArmy"
                "HP": 3152,
                "HPRate": 52,
                "Attk": 305,
                "AttkRate": 46,
                "Int": 431,
                "IntRate": 71,
                "Def": 242,
                "DefRate": 53,
                "MagicDef": 408,
                "MagicDefRate": 90,
                "Skill": 77,
                "SkillRate": 22,
                "HeartFetterBouns1": "체력 80%이상시 치명타공격을 받을 확률 -10%",
                "HeartFetterBouns2": "공격받아 전투 진입시 입히는 피해+10%"
            },
            {
                "Name": "세인트",
                "Icon": "Icon_Occupation_Monk.png",
                "SD": [
                    {
                        "ImageUrl": "소피아/1/2.png"
                    },
                    {
                        "ImageUrl": "소피아/2/2.png"
                    },
                    {
                        "ImageUrl": "소피아/3/1.png"
                    }
                ],
                "AttkRange": 2,
                "Move": 3,
                "MoveType": "Walk", // "Walk, Ride, Fly, Water, FieldArmy"
                "HP": 3305,
                "HPRate": 55,
                "Attk": 305,
                "AttkRate": 46,
                "Int": 466,
                "IntRate": 77,
                "Def": 261,
                "DefRate": 58,
                "MagicDef": 398,
                "MagicDefRate": 88,
                "Skill": 77,
                "SkillRate": 22,
                "HeartFetterBouns1": "체력 50% 이하시 받는 피해 -10%",
                "HeartFetterBouns2": "공격하여 전투 진입시 <b>용병이 가하는 피해</b> +10%"
            }
        ],
        "Materials": {
            "HeartFetter": [
                "h2",
                "h3",
                "h1",
                "h4",
                "h2-1",
                "h3-1",
                "h1-1",
                "h4-1",
                "x",
            ],
            "Fetter": [
                "3",
                "3-1",
                "3-2",
                "3-3",
                "3-4"
            ],
            "Awaken": [
                "ranka1",
                "ranka3",
                "ranka1-1",
                "ranka3-1"
            ]
        },
        "ClassUp": [ // 2개씩 한묶음으로 표시됨.
            {
                "ClassTitle": "시스터 : 마방+6, 지력+5",
                "Tiers": [
                    {
                        "Name": "T1",
                        "Materials": [
                            "rank1-4"
                        ]
                    },
                    {
                        "Name": "T2",
                        "Materials": [
                            "rank1-4"
                        ]
                    }
                ]
            },
            {
                "ClassTitle": "주교 : 마방+8, 생명+48",
                "Tiers": [
                    {
                        "Name": "T1",
                        "Materials": [
                            "rank2-5",
                            "rank1-5",
                            "rank1-4"
                        ]
                    },
                    {
                        "Name": "T2",
                        "Materials": [
                            "rank3-4",
                            "rank3-5",
                            "rank2-5",
                            "rank2-4"
                        ]
                    },
                    {
                        "Name": "T3",
                        "Materials": [
                            "rank4-5",
                            "rank4-4",
                            "rank3-4",
                            "rank3-5"
                        ]
                    }
                ]
            },
            {
                "ClassTitle": "프리스트 : 생명+48, 마방+8",
                "Tiers": [
                    {
                        "Name": "T1",
                        "Materials": [
                            "rank2-5",
                            "rank1-5",
                            "rank1-4"
                        ]
                    },
                    {
                        "Name": "T2",
                        "Materials": [
                            "rank3-4",
                            "rank3-5",
                            "rank2-5",
                            "rank2-4"
                        ]
                    },
                    {
                        "Name": "T3",
                        "Materials": [
                            "rank4-5",
                            "rank4-4",
                            "rank3-4",
                            "rank3-5"
                        ]
                    }
                ]
            },
            {
                "ClassTitle": "프로핏 : 생명+90, 방어+10, 지력+25",
                "Tiers": [
                    {
                        "Name": "T1",
                        "Materials": [
                            "rank5-4",
                            "rank5-5",
                            "rank4-5",
                            "rank4-4"
                        ]
                    },
                    {
                        "Name": "T2",
                        "Materials": [
                            "rank6-8",
                            "rank6-7",
                            "rank5-4",
                            "rank5-5"
                        ]
                    },
                    {
                        "Name": "T3",
                        "Materials": [
                            "rank7-5",
                            "rank7-6",
                            "rank6-8",
                            "rank6-7"
                        ]
                    },
                    {
                        "Name": "T4",
                        "Materials": [
                            "rank8-6",
                            "rank8-4",
                            "rank7-5",
                            "rank7-6"
                        ]
                    }
                ]
            },
            {
                "ClassTitle": "마터 : 마방+8, 지력+7",
                "Tiers": [
                    {
                        "Name": "T1",
                        "Materials": [
                            "rank2-5",
                            "rank1-5",
                            "rank1-4"
                        ]
                    },
                    {
                        "Name": "T2",
                        "Materials": [
                            "rank3-4",
                            "rank3-5",
                            "rank2-5",
                            "rank2-4"
                        ]
                    },
                    {
                        "Name": "T3",
                        "Materials": [
                            "rank4-5",
                            "rank4-4",
                            "rank3-4",
                            "rank3-5"
                        ]
                    }
                ]
            },
            {
                "ClassTitle": "세인트 : 지력+25, 마방+10, 생명+90",
                "Tiers": [
                    {
                        "Name": "T1",
                        "Materials": [
                            "rank5-4",
                            "rank5-5",
                            "rank4-5",
                            "rank4-4"
                        ]
                    },
                    {
                        "Name": "T2",
                        "Materials": [
                            "rank6-8",
                            "rank6-7",
                            "rank5-4",
                            "rank5-5"
                        ]
                    },
                    {
                        "Name": "T3",
                        "Materials": [
                            "rank7-5",
                            "rank7-6",
                            "rank6-8",
                            "rank6-7"
                        ]
                    },
                    {
                        "Name": "T4",
                        "Materials": [
                            "rank8-6",
                            "rank8-4",
                            "rank7-5",
                            "rank7-6"
                        ]
                    }
                ]
            }
        ],
        "SPOpenConditions": null,
        "Skills": [
            {
                "Name": "힐",
                "IsPassive": false,
                "Cost": 1,
                "Type": 5, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 0, // 0 - 해당사항 없음
                "Distance": 2, // 0 - 자신, 1 ~ - 사거리
                "Range": 1, // 1 - 단일, 2~98 - 범위, 99 - 맵전체
                "IconImageUrl": "../img/skills/17.png",
                "Desc": "[치료] 액티브 스킬. 단일 부대의 생명을 회복시킨다.</br>회복량은 사용자 지력의 5배. 그리고 디버프를 1개 제거한다.",
                "Animation": null
            },
            {
                "Name": "강화",
                "IsPassive": false,
                "Cost": 1,
                "Type": 4, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 1, // 0 - 해당사항 없음
                "Distance": 3, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 1, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/Skill_ATKup.png",
                "Desc": "[지원]액티브 스킬, 1개 부대의 공격,지력 +20% 및</br> 면역: '공격, 지력 감소', '침묵', 2턴 지속.",
                "Animation": null
            },
            {
                "Name": "매스 힐",
                "IsPassive": false,
                "Cost": 2,
                "Type": 5, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 1, // 0 - 해당사항 없음
                "Distance": 3, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 3, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/23.png",
                "Desc": "[치료] 액티브 스킬. 범위 내 아군들의 생명을 회복시킨다.</br>회복량은 사용자 지력의 3배. 그리고 디버프를 1개 제거한다.",
                "Animation": null
            },
            {
                "Name": "리턴",
                "IsPassive": false,
                "Cost": 2,
                "Type": 4, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 5, // 0 - 해당사항 없음
                "Distance": 3, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 4, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/Skill_ClearCD.png",
                "Desc": "[지원]액티브 스킬, 범위 내 모든 아군의 모든 스킬 쿨타임 -3턴.</br>그리고 사용자 지력 3배의 생명을 회복시킨다.",
                "Animation": null
            },
            {
                "Name": "재생",
                "IsPassive": false,
                "Cost": 1,
                "Type": 4, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 1, // 0 - 해당사항 없음
                "Distance": 2, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 1, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/Skill_Heal2.png",
                "Desc": "[지원]액티브 스킬, 단일 아군 부대에게 전투 후 생명을 10% 회복하게한다. 2턴지속.",
                "Animation": null
            },
            {
                "Name": "썬더스톰",
                "IsPassive": false,
                "Cost": 2,
                "Type": 2, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 3, // 0 - 해당사항 없음
                "Distance": 3, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 3, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/Skill_ThunderCrash.png",
                "Desc": "[마법 피해]범위 내 적들을 공격해 0.3배의 광역 피해를 준다.</br>'기병'에게 더 큰 피해를 주며 적의 방어 -20%, 2턴 지속.",
                "Animation": null
            },
            {
                "Name": "공격 지원",
                "IsPassive": true,
                "Cost": 1,
                "Type": 0, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 0, // 0 - 해당사항 없음
                "Distance": 0, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 0, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/Passive_AtkBuf5.png",
                "Desc": "[패시브]행동 종료 시 근접한 <font color=\"red\">1개</font> 아군 부대의 공격, 지력 <font color=\"red\">+15%</font> 및<br>면역: '공격, 지력 감소', '침묵', <font color=\"red\">1턴</font> 지속.",
                "Animation": null
            },
            {
                "Name": "성언",
                "IsPassive": false,
                "Cost": 2,
                "Type": 2, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 1, // 0 - 해당사항 없음
                "Distance": 2, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 1, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/19.png",
                "Desc": "[마법 피해] 단일 적 부대를 공격해 1.5배의 피해를 준다.</br>'마물'에게 더 큰 피해를 준다. 전투 후 생명이 가장 적은 아군의 생명을 회복시킨다.</br>회복량은 사용자 지력의 4배.",
                "Animation": null
            },
            {
                "Name": "광역 마방",
                "IsPassive": false,
                "Cost": 2,
                "Type": 4, // 0 - 해당사항 없음, 1 - 물리피해, 2 - 마법피해, 3 - 초절강화, 4 - 지원, 5 - 치료
                "CoolTime": 2, // 0 - 해당사항 없음
                "Distance": 3, // 0 - 자신 / 해당사항 없음, 1 ~ - 사거리
                "Range": 3, // 0 - 해당사항 없음, 1 - 단일, 2~97 - 범위, 98 - 직선, 99 - 맵전체
                "IconImageUrl": "../img/skills/Skill_MassMDefKup.png",
                "Desc": "[지원] 액티브 스킬, 범위 내 아군들의 마방+30%,</br>그리고 '기절', '강화 방해', '이동력 감소' 면역 부여, 2턴 지속.",
                "Animation": null
            }
        ],
        "Bio": [
            {
                "Entry": "영웅소개",
                "Desc": "◆키/몸무게：164cm / 42kg<br>◆신체 사이즈：82/56/83<br>◆출연：랑그릿사III<br>◆소속：정의로운 동료"
            },
            {
                "Entry": "영웅담1",
                "Desc": "빛의 대신전 대사제인 현자 파벨의 딸로 고대 결계 '루시리스 게이트'의 수호자 중 한 명이다. 강인하면서도 성녀처럼 부드러운 성품을 지닌 여성. 결계를 지키고 마족의 침입을 감시하는 중책을 맡고 있으며 모든 사람의 행복을 위해 묵묵히 노력한다. 초대 빛의 무녀로서 마검 알하자드를 봉인하는 힘을 갖고 있다.<br><font color=#DC143C><size=33><i>「마족이 이곳을 통과하게 둘 수 없어요!」</i> </size> </font>"
            },
            {
                "Entry": "영웅담2",
                "Desc": "순결하고 선량한 마음씨를 갖고 있으며 이해심이 많다. 유약해 보이는 외모 아래 용감하고 굳건한 마음을 지니고 있으며 무고한 사람을 해치는 일은 결코 용납하지 않는다.<br><font color=#DC143C><size=33><i>「걱정 마세요. 당신의 승리를 위해 제가 언제나 기도하겠습니다! 」</i> </size> </font>"
            },
            {
                "Entry": "영웅담3",
                "Desc": "본래 「루시리스 게이트」의 수호자로 전란 중 마족의 지시를 받은 시카 부족에 의해 제물로 바쳐질 뻔했다. 때마침 그곳에 도착한 디하르트 일행에게 구해져 라카스 독립군에 참가하였다. 신성한 치료의 힘으로 상처 입은 동료들을 치료해 준다."
            },
            {
                "Entry": "영웅담4",
                "Desc": "전쟁이 끝난 후 전쟁으로 인한 상처와 아픔을 위로해 주기 위해 대륙 각지를 주유하며 빛의 여신에 대한 신앙과 희망을 전해주었다. 엘스리드 왕국 역시 그녀의 협조 덕분에 빠르게 부흥하기 시작했으며 상처 입은 대륙은 점차 회복하게 된다."
            },
            {
                "Entry": "영웅담5",
                "Desc": "이곳 사람들이 받은 상처에 가슴 아파하며 동료들과 같이 도탄에 빠진 세계를 치료하기 위해 노력한다.<br><font color=#DC143C><size=33><i>「순결한 바람이 대륙을 가로질러 갑니다. 여기서 맹세하는데 이 세계의 아름다운 사랑을 지키겠어요...」</i> </size> </font>"
            }
        ],
        "Performance": [
            {
                "Entry": "「소환 - 등장대사」",
                "Desc": "신전의 무녀, 소피아입니다. 뭐든지 말씀해 주세요."
            },
            {
                "Entry": "「전투 - 전직1」",
                "Desc": "저, 강해질 수 있을까요? 여신께서도 축복해 주시겠죠."
            },
            {
                "Entry": "「전투 - 전직2」",
                "Desc": "신앙이 저를 지탱해 주고 있어요. 저는 앞으로 나아가겠어요!"
            },
            {
                "Entry": "「전투 - 스킬시전1」",
                "Desc": "이건 별로 사용하고 싶지 않네요."
            },
            {
                "Entry": "「전투 - 스킬시전2」",
                "Desc": "어라? 어쩌다 보니... 죄송해요."
            },
            {
                "Entry": "「전투 - 선택1」",
                "Desc": "예?"
            },
            {
                "Entry": "「전투 - 선택2」",
                "Desc": "아하."
            },
            {
                "Entry": "「전투 - 전투불능」",
                "Desc": "조금 쉬지 않으면..."
            },
            {
                "Entry": "「대화 - 친밀도1」",
                "Desc": "어라... 기도하러 오신건가요?"
            },
            {
                "Entry": "「대화 - 친밀도2」",
                "Desc": "기도를 하실 땐 눈을 감아주세요. 훔쳐 보시면 안돼요..."
            },
            {
                "Entry": "「대화 - 친밀도3」",
                "Desc": "정말...곤란한 사람이네요.... 그렇게 한다면 저는 당신을 좋아하게 된다구요."
            },
            {
                "Entry": "「대화 - 친밀도4」",
                "Desc": "머리카락이요? ...아, 빗어주는 거야? 고마워...."
            },
            {
                "Entry": "「대화 - 친밀도5」",
                "Desc": "어머, 안돼요. 저는 순결의 맹세를 했어요. 그러니까 안된다고 말했는데....정말 어쩔 수 없네요. 상냥하게 해주세요."
            },
            {
                "Entry": "「대화 - 일상1」",
                "Desc": "걱정하지 마세요. 제가 언제나 당신의 승리를 위해 기도할게요!"
            },
            {
                "Entry": "「대화 - 기쁨」",
                "Desc": "여신께선 분명 우리들의 기도에 답해주실 거예요!"
            },
            {
                "Entry": "「대화 - 분노」",
                "Desc": "저는 루시리스 게이트의 수호자입니다! 혼돈한 것이나 사악한 건 물러나라!"
            },
            {
                "Entry": "「대화 - 슬픔」",
                "Desc": "여신께서 인간을 위해 자신을 희생한 걸 생각하면... 마음이 아파옵니다."
            },
            {
                "Entry": "「대화 - 수줍음」",
                "Desc": "오늘은 바람이... 조금 시끄럽네요...."
            },
            {
                "Entry": "「상호작용 - 대사1」",
                "Desc": "조금... 부끄럽네요...."
            },
            {
                "Entry": "「상호작용 - 대사2」",
                "Desc": "꺄악"
            },
            {
                "Entry": "「상호작용 - 대사3」",
                "Desc": "정말 상냥한 분이시네요."
            },
            {
                "Entry": "「상호작용 - 대사4」",
                "Desc": "음...아아...."
            },
            {
                "Entry": "「상호작용 - 대사5」",
                "Desc": "이게 사랑이라는 건가요...."
            },
            {
                "Entry": "「상호작용 - 호감1」",
                "Desc": "여신께서 제 기분을 안다고 생각하면.... 심장이 튀어나올 것만 같아요...."
            },
            {
                "Entry": "「상호작용 - 호감2」",
                "Desc": "좀 더 이쪽으로 와주세요.... 제 모든 걸, 바칠게요...."
            },
            {
                "Entry": "「상호작용 - 반감1」",
                "Desc": "무례하네요.... 그만하세요...."
            },
            {
                "Entry": "「상호작용 - 반감2」",
                "Desc": "그만하세요!"
            },
            {
                "Entry": "「상호작용 - 반감3」",
                "Desc": "여신께서 용서치 않을 거예요!"
            },
            {
                "Entry": "「상호작용 - 특수1」",
                "Desc": "당신을 위해 기도할게요."
            },
            {
                "Entry": "「상호작용 - 특수2」",
                "Desc": "또 만나요."
            }
        ]
    }
];