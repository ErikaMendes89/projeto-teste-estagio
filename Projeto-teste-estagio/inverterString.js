//4 Inverter  os caracteres de uma string
function InverterString (str){
    let inverted = "";
    for (let i = str.length -1; i >= 0; i --){
        inverted += str[i];
    }
    return inverted;
}

export default InverterString;