const options ={
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
};
const data = new Date();
console.log(data.toLocaleDateString('pt-Br', options))

