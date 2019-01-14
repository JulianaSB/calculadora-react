const calculaExpressao = (exp) =>{
    //eval é uma função que lê toda string como código, etnãp 10+10 ele vai retornar 20
    return eval(exp);
};

export default calculaExpressao