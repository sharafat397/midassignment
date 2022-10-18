let car=0,cprice=0, tprice=0,dc=5000,dp=0,tp=0,sp=0;
function addtocart(price)
{
    car++;
    cprice+=price;
    if(cprice<4300000)
    {
        dp=0;
    }
    else if(cprice<9000000)
    {
        dp=.005;
    }
    else if(cprice<12500000)
    {
        dp=.010;
    }
    else {
        dp=.015;
    }
    dp=cprice*dp;
    tprice=cprice-dp;
    //tax collection after discount
    if(cprice<4300000)
    {
        tp=.015;
    }
    else if(cprice<9000000)
    {
        tp=.025;
    }
    else if(cprice<12500000)
    {
        tp=.030;
    }
    else {
        tp=.045;
    }
    tp=tprice*tp;
    //delivery charge
    if(tprice<4300000)
    {
        dc=0.010;
    }
    else if(tprice<9000000)
    {
        dc=.005;
    }
    else {
        dc=0.012;
    }
    dc=tprice*dc;
    sp=tprice*0.05;
    tprice=tprice+tp+dc+sp;
    document.getElementById('cars').innerText=car;
    document.getElementById('cprice').innerText=cprice;
    document.getElementById('dp').innerText=dp;
document.getElementById('sp').innerText=sp;
    document.getElementById('tp').innerText=tp;
    document.getElementById('dc').innerText=dc;
    document.getElementById('t').innerText=tprice;
}
