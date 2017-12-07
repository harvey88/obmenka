;(function(){
//Dropdown plugin data
var ddData = [
    {
        text: "PerfectMoney USD",
        value: 1,
        selected: true,
        description: "Description with PerfectMoney USD",
        imageSrc: "img/logo/PMUSD.png"
    },
    {
        text: "PAYEER",
        value: 2,
        selected: false,
        description: "Description with PAYEER",
        imageSrc: "img/logo/PRUSD.png"
    },
    {
        text: "Приватбанк",
        value: 3,
        selected: false,
        description: "Description with Приватбанк",
        imageSrc: "img/logo/P24UAH.png"
    },
    {
        text: "WEXUSD",
        value: 4,
        selected: false,
        description: "Description with WEXUSD",
        imageSrc: "img/logo/WEXUSD.png"
    },
    {
        text: "BITCOIN",
        value: 4,
        selected: false,
        description: "Description with BITCOIN",
        imageSrc: "img/logo/bitcoin-cash.png"
    },
    {
        text: "ADVCASH USD",
        value: 4,
        selected: false,
        description: "Description with ADVCASH USD",
        imageSrc: "img/logo/ADVCUSD.png"
    },
    {
        text: "PerfectMoney USD",
        value: 4,
        selected: false,
        description: "Description with PerfectMoney USD",
        imageSrc: "img/logo/PMUSD.png"
    }
];
$('#myDropdown').ddslick({
    data:ddData,
    width:300,
    selectText: "Select your preferred social network",
    imagePosition:"right",
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});
$('#myDropdown').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});



var ddData = [
    {
        text: "PerfectMoney USD",
        value: 1,
        selected: true,
        description: "Description with PerfectMoney USD",
        imageSrc: "img/logo/PMUSD.png"
    },
    {
        text: "PAYEER",
        value: 2,
        selected: false,
        description: "Description with PAYEER",
        imageSrc: "img/logo/PRUSD.png"
    },
    {
        text: "Приватбанк",
        value: 3,
        selected: false,
        description: "Description with Приватбанк",
        imageSrc: "img/logo/P24UAH.png"
    },
    {
        text: "WEXUSD",
        value: 4,
        selected: false,
        description: "Description with WEXUSD",
        imageSrc: "img/logo/WEXUSD.png"
    },
    {
        text: "BITCOIN",
        value: 4,
        selected: false,
        description: "Description with BITCOIN",
        imageSrc: "img/logo/bitcoin-cash.png"
    },
    {
        text: "ADVCASH USD",
        value: 4,
        selected: false,
        description: "Description with ADVCASH USD",
        imageSrc: "img/logo/ADVCUSD.png"
    },
    {
        text: "PerfectMoney USD",
        value: 4,
        selected: false,
        description: "Description with PerfectMoney USD",
        imageSrc: "img/logo/PMUSD.png"
    }];
$('#myDropdown-right').ddslick({
    data:ddData,
    width:300,
    selectText: "Select your preferred social network",
    imagePosition:"right",
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});
$('#myDropdown-right').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});
})();
