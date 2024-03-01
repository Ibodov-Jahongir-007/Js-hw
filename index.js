//let user = {
//    name: 'Jahonbek',
//    surname: 'Musinov',
//    wifes: ['Brodyaga','Neytral','Zadnaya'],
//    achivmiest: {
//        First: 'Krasauchik',
//        second: 'Handsome',
//        threth: 'Beter than penaldo'
//    },
//    nationality: 'uzb sila',
//    gender: 'male',
//    phone: 998777777777
//}

// let fc = {
//     fc: 'BarcelonaFC',
//     coach: 'Havi',
//     players: 28,
//     sostav: {
//         gk: {
//             first: 'Ter Stegen',
//             second: 'Iniaki Penya'
//         },
//         MidFielder: {
//             First: 'Rafinhia',
//             second: 'F.Torres',
//             threeth: 'J.Felix',
//             fourth: 'Ghavi'
//         },
//         Defenders: {
//             first: 'J.Cancelo',
//             second: 'S.Roberto',
//             threth: 'I.Martines',
//             fourth: 'M.Alonco'
//         },
//         Vingers: {
//             first: 'R.Lewandowski',
//             second: 'V.Roke',
//             Treeth:'M.Giu'
//         },
//     },
//     DateOfFoundation: 1899,

// }


    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }


      
      
      arr.forEach(task => {
        if (task.completed) {
          a.count++;
          a.arr += ` ID ${task.id}: ${task.title}`;
        } else {
          b.count++;
          b.arr += ` ID ${task.id}: ${task.title}`;
        }

       
      });

   
      


    console.log(a);
    console.log(b);