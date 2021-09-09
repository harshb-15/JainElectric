function copyNumber()
{
    navigator.clipboard.writeText("9712744368");
    alert("Number Copied");
}
async function copyUPI()
{
    let text = "upiid@okhdfc";
    await navigator.clipboard.writeText(text);
    // navigator.clipboard.writeText("upiid@okicici");
    alert("UPI Id Copied");
}
function openMap()
{
    window.open("https://www.google.com/search?q=Jain+Electric%2C+aradhna+complex&client=opera-gx&hs=26V&tbm=lcl&sxsrf=AOaemvJQFuuRVdV_CX5_utihDLIQ-sFn_A%3A1630908132016&ei=5K41YfJGgpevvA_H063YCw&oq=Jain+Electric%2C+aradhna+complex&gs_l=psy-ab.3..33i10i160k1.8602.13748.0.13925.17.14.0.0.0.0.343.1918.0j3j3j2.8.0....0...1c.1.64.psy-ab..9.8.1917...38j0i273k1j0i512k1j0i512i457k1j0i22i30k1j33i160k1.0.KfTzzC5NsVw#rlfi=hd:;si:3928071996529855742;mv:[[23.024954777319028,72.59156495613958],[23.024594822680974,72.59117384386039]]");
}
$("img").click(function ()
{
    var cursrc = $(this).attr('src');
    var mainsrc = document.getElementsByClassName("main-img")[0];
    mainsrc.setAttribute("src", cursrc);
})