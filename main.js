banner = (num) => {console.log(`######### Challenge ${num} #########`)}

banner(1);
chal1 = () => {
    let num = 0
    while (num < 5) {
        num = num +1
        console.log(num)
} 
}
chal1()
banner (2);

chal2 = (num) => {
    let start = 0
    while (start < num) {
        start = start +1
        console.log(start)
    }
}
chal2 (10)

banner (3)

chal3 = (x,y) => {
    
    while (x < y) {
        x = x + 1
        console.log(`${(x)-1}`)
    }
}
chal3(1,5)

banner (4)


chal4 = (num) => {
    let x = 0
    while (x < num){
        x = x + 1
        if (x%2 === 0) console.log('even')
        if (x%2 !== 0) console.log('odd')
    }
    
     
}

chal4 (5)

banner (5)

chal5 = (num) => {
while (num > 0){
    num = num -1
    if (num%2 === 0) console.log(num)
}
}

chal5(11)

banner (6)

chal6 = () => {
    x = 11
    while (x > 0){
        console.log(x)
        x = x -1
        
    }
}
chal6 ()


banner (7)

chal7 = () => {
    x = 11
    while (x > 1){
        x = x -1
        console.log(x)
        if ( x === 1) console.log('Blast off!')
}
}

chal7()

banner (8)

chal8 = (num) => {
    console.log(num)
while (num > 0) {
    console.log(num )
    num = num - 3
    
   
}
}
chal8(20)
banner (9)

chal9 = (num)  => {
    while (num > 0){
        console.log(`${num} Hello`)
        num = num - 1
        
    }


}

chal9 (7)

banner (10)

chal10 = (str) => {
x = 0
while ( x < 7){    
    console.log(str)
    x = x + 1
}
}

chal10('gg')

banner (11)

chal11 = (str,num)  => {
    while (num > 0){
        console.log(str)
        num = num - 1
    }
}


chal11 ("Good-bye..." ,4)


banner (12)

chal12 = (str) => {
   let length = 0
    while (length < str.length) {
        console.log(str[length])
        length = length  + 1
        
    }
}

chal12 ('think')


banner (13)


chal13 = (str) => {
    let length = 0
     while (length < str.length) {
         if (length%2!== 0)console.log(str[length])
         length = length  + 1
         
     }
 }
 
 chal13 ('Nobody')


 banner (14)

 chal14 = (str) => {
    let length = str.length
     while (length > 0) {
         console.log(str[length-1])
         length = length  - 1
         
     }
 }
 
 chal14 ('sup broh')

 banner (15)

 chal15 = (num) => {
     
    while (num > 0){
        let x = num % 3 === 0,
          y = num% 5 === 0;
        if (!x && !y)console.log(num)
        if (x && !y) console.log('Fizz')
        if (y && !x) console.log('Buzz')
        if (x && y) console.log('FizzBuzz')
        num = num -1
     
     }
 }

 chal15 (15)

 banner (16)

 chal16 = (num) => {
    let x = 1
        y = 1
        z = ''
        while (num > x + y) {
            z = x + y
            x = z + y 
            console.log(y)
            console.log(z)
            if (num > x) console.log(x)
            y = x + z 
        
        
        
        }
        console.log(num)
 }

 chal16 (200)

