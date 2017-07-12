//#1  target:10min  
var order = [{barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00, count: 5}, {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, count: 2}, {barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00, count: 1}];
var orderarray = OrderArray(order);

var percount = PerCount(orderarray);
var allcount = AllCount(percount);

function OrderArray(order) {
    var OrderArray = new Array();
    for(i = 0;i < order.length; i++) {
        OrderArray.push([order[i].barcode,order[i].name,order[i].unit,order[i].price,order[i].count])
}
    return OrderArray;
}

//  7min 55s
 
//#2  target:10min

function PerCount(orderarray) {
    var PerCount = new Array();
    for(var i = 0;i < orderarray.length;i++) {
        PerCount.push(orderarray[i][3] * orderarray[i][4]);
}
    return PerCount;
}
//  3min 7s

//#3  target:5min

function AllCount(percount) {
    var AllCount = 0;
    for(i = 0;i < percount.length;i++) {
    AllCount += percount[i];
}
    return AllCount;
}

//  4min 48s

//#4  target:15min

function typeout(orderarray,percount,allcount) {
    console.log("***<有钱赚商店>收据***\n名称：%s,数量：%s%s，单价：%f（元），小计：%f（元）\n名称：%s,数量：%s%s，单价：%f（元），小计：%f（元）\n名称：%s,数量：%s%s，单价：%f（元），小计：%f（元）\n-----------------------\n总计：%f（元）\n***************",orderarray[0][1],orderarray[0][4],orderarray[0][2],orderarray[0][3],percount[0],orderarray[1][1],orderarray[1][4],orderarray[1][2],orderarray[1][3],percount[1],orderarray[2][1],orderarray[2][4],orderarray[2][2],orderarray[2][3],percount[2],allcount);
    return 0;
}
typeout(orderarray,percount,allcount)

//  12min 49s
//    str+=".00"
