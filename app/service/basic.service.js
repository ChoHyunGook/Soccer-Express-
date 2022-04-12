exports.getBmi = (payload) => {
    const {name, height, weight} = payload
    let _height = Number(height) / 100
    let _weight = Number(weight)
    let bmi = _weight/Math.pow(_height, 2)
    let output = Math.round(bmi * 100) / 100
    console.log(output)
    const result = {name, height, weight} // 구조화 structuring
    if (output<18.5)
        result.bmi = "저체중";
    if (output>=18.5 && output<=25)
        result.bmi = "정상";
    if (output>=25 && output<=30)
        result.bmi = "과체중";
    if (output>30)
        result.bmi = "경도비만";
    return result
}

exports.getCalc = (payload) => {
    const {num1, op, num2} = payload
    let _num1 = Number(num1)
    let _num2 = Number(num2)
    const result = {num1, op, num2}
    switch(op) {
        case '+' : result.res = _num1 + _num2; break;
        case '-' : result.res = _num1 - _num2; break;
        case '*' : result.res = _num1 * _num2; break;
        case '/' : result.res = _num1 / _num2; break;
        case '%' : result.res = _num1 % _num2; break;
    }
    return result
}
    
exports.getGrade = (payload) => {
    const {name, kor, eng, math} = payload
    let _kor = Number(kor)
    let _eng = Number(eng)
    let _math = Number(math)
    let avg = (_kor + _eng +_math) / 3.0
    
    if (avg >= 90)
        grade = 'A'
    else if (avg < 90 && avg >= 80)
        grade = 'B'
    else if (avg <80 && avg >= 70)
        grade = 'C'
    else if (avg < 70 && avg >= 65)
        grade = 'D'
    else if (avg < 65 && avg >= 60)
        grade = 'E'
    else
        grade = 'F'
    const result = {name, kor, eng, math, avg, grade}

    if (grade == 'F')
        result.res='불합격' 
    else 
        result.res= '합격'
    
return result
}

exports.getRps =(payload)=>{
    const {user}=payload
    let _user = Number(user)
    let computer = Math.floor(Math.random()*3)
    let _com= Number(computer)
    const result ={user,computer}
    
    if(_com == 0){
        if (_user == 1){
            result.res='User 승!'
        }
        else if (_user == 2){
            result.res='Computer 승!'
        }
        else if (_user == 0){
            result.res='DRAW!'
        }
    }
    else if(_com == 1){
        if (_user == 2){
            result.res='User 승!'
        }
        else if (_user == 0){
            result.res='Computer 승!'
        }
        else if (_user == 1){
            result.res='DRAW!'
        }
    }
    else if(_com == 2){
        if (_user == 0){
            result.res='User 승!'
        }
        else if (_user == 1){
            result.res='Computer 승!'
        }
        else if (_user == 2){
            result.res='DRAW!'
        }
    }
    return result
}

exports.getEchant =(payload)=>{
    const {item}=payload
    let percent = Math.floor(Math.random()*10)+1
    let acc= Math.floor(Math.random()*20)+1
    let complete= Math.floor(Math.random()*100)+1
    const result={item,percent}

    switch(item) {
        case 'sword' :
            if (percent>=3){
                result.res='오~~성공! 오오오오올~~ 기뻐하지마 70프로야ㅋㅋㅋ'
            }
            else if (percent<3){
                result.res='ㅋㅋㅋㅋㅋㅋㅋㅋ 똥손 ㅅㄱ 게임 첨 해봄?ㅋㅋㅋㅋ'
            } break;
        case 'greatSword' :
            if (percent>=4){
                result.res='오~~성공! 오오오오올~~ 기뻐하지마 60프로야ㅋㅋㅋ'
            }
            else if (percent<4){
                result.res='ㅋㅋㅋㅋㅋㅋㅋㅋ 똥손 ㅅㄱ 게임 첨 해봄?ㅋㅋㅋㅋ'
            } break;
        case 'shortSword' :
            if (percent>=5){
                result.res='오~~성공! 오오오오올~~ 기뻐하지마 50프로야ㅋㅋㅋ'
            }
            else if (percent<5){
                result.res='ㅋㅋㅋㅋㅋㅋㅋㅋ 똥손 ㅅㄱ 게임 첨 해봄?ㅋㅋㅋㅋ'
            } break;
        case 'wand' :
            if (percent>=6){
                result.res='오~~성공! 오오오오올~~ 강화좀 해봣네 40프로임ㅋㅋ'
            }
            else if (percent<6){
                result.res='ㅋㅋㅋㅋㅋㅋㅋㅋ 똥손 ㅅㄱ 게임 첨 해봄?ㅋㅋㅋㅋ'
            } break;
        case 'spear' :
            if (percent>=7){
                result.res='오~~성공! 오오오오올~~ 30프로 넘어섬 오올~~'
            }
            else if (percent<7){
                result.res='ㅋㅋㅋㅋㅋㅋㅋㅋ 똥손 ㅅㄱ 게임 첨 해봄?ㅋㅋㅋㅋ'
            } break;
        case 'axe' :
            if (percent>=8){
                result.res='오~~대박 성공 확률 20퍼임ㅋㅋㅋㅋ'
            }
            else if (percent<8){
                result.res='ㅋㅋㅋㅋㅋㅋㅋㅋ 똥손 ㅅㄱ 게임 첨 해봄?ㅋㅋㅋㅋ'
            } break;
        case 'cookKnife' :
            if (percent>=10){
                result.res='성공시킨 너도 참 대단하다ㅋㅋㅋ, 식칼을 왜 강화하는거야ㅋㅋㅋ'
            }
            else if (percent<10){
                result.res='식칼을 왜 강화하려는거야ㅋㅋㅋ 극악난이도임ㅋㅋㅋ'
            } break;
        case 'ring' :
            if (acc>=17){
                result.res='오~~성공ㅋㅋㅋ 이제 귀걸이해봨ㅋㅋㅋ'
            }
            else if (acc<17){
                result.res='악세는 원래 잘 안뜬단닼ㅋㅋㅋㅋ'
            } break;   
        case 'ear' :
            if (acc>=18){
                result.res='오올~~!!성공!! 이제 목걸이해봨ㅋㅋㅋ'
            }
            else if (acc<18){
                result.res='악세는 원래 잘 안뜬단다ㅋㅋㅋㅋ 귀걸이는 더힘들지'
            } break; 
        case 'neck' :
            if (acc>=19){
                result.res='오옹~~!!!! 성공!! 미리 주의 절대반지는 노건들'
            }
            else if (acc<19){
                result.res='악세는 원래 잘 안뜬단다ㅋㅋㅋㅋ'
            } break;
        case 'absoluteRing' :
            if (complete == 50){
                result.res='ㅁㅊ 운빨보소... 성공... 로또 사라 진심으로...'
            }
            else 
                result.res='실패지 놀래긴ㅋㅋㅋ 웰컴투더 헬ㅋㅋㅋ 손가락 나간다ㅋㅋㅋㅋ'
             break;    
    }
    return result
}