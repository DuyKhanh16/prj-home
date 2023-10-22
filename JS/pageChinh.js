
function itemid() {
    return Math.ceil(Math.random()*9999)
}
let product=[
    {name:"Cafe Đen",
    price:"20000",
    img:"/Media/cafeden.jpg",
    id:itemid()
    },
    {name:"Cafe Nâu",
    price:"25000",
    img:"/Media/cafenau.jpg",
    id:itemid()
    },
    {name:"Bạc Sỉu",
    price:"30000",
    img:"/Media/bacsiu.jpg",
    id:itemid()
    },
    {name:"Cafe Cốt Dừa",
    price:"35000",
    img:"/Media/cafedua.jpg",
    id:itemid()
    },
    {name:"Cafe Muối",
    price:"30000",
    img:"/Media/cafemuoi.jpg",
    id:itemid()
    },
    {name:"Trà Chanh",
    price:"20000",
    img:"/Media/trachanh.jpg",
    id:itemid()
    },
    {name:"Trà Tắc",
    price:"20000",
    img:"/Media/tra tac.jpg",
    id:itemid()
    },
    {name:"Trà Đào",
    price:"30000",
    img:"/Media/tra dao.jpg",
    id:itemid()
    },
    {name:"Trà Vải",
    price:"30000",
    img:"/Media/tra vai.jpg",
    id:itemid()
    },
    {name:"Trà Sữa Trân châu",
    price:"30000",
    img:"/Media/tra sua tran chau.jpg",
    id:itemid()
    },
    {name:"Sữa tươi trân châu đường đen",
    price:"30000",
    img:"/Media/duongden.jpg",
    id:itemid()
    },
    {name:"Trà Sữa MatCha",
    price:"30000",
    img:"/Media/matcha.jpg",
    id:itemid()
    },
];
let text=""
for (let i = 0; i< product.length; i++) { 
   text += 
   `
   <div class="item">
   <img width="350" height="250" src=${product[i].img} alt="">
   <p><strong>${product[i].name}</strong></p>
   <p>Thơm ngon mời bạn ăn nha!</p>
   <p><strong>Giá</strong>: <span>${product[i].price}</span></p>
   <button class="byItem" onclick="byItem()">Mua Luôn</button>
</div>
   `
}
document.getElementsByClassName("productList")[0].innerHTML=text