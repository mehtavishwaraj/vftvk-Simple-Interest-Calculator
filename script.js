function compute()
{
    var p,r,t,si;
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    si = parseInt((p*r*t)/100 );
    document.getElementById ('result').innerHTML = si;
    
}
        
