//ex 1
alert("Ex 1:")
function lerValor() {
    let l = Number(prompt("Digite um valor"))
    return alert(`${l}`)
}
lerValor()

//ex 2
alert("Ex 2:")
function soma3(x,y,z) {
    let soma = x + y+ z
    return alert(`${soma}`)
}

let x = Number(prompt("Digite um valor: "))
let y = Number(prompt("Digite um valor: "))
let z = Number(prompt("Digite um valor: "))

soma3(x,y,z)

//ex 3
function mediaAnual (notaSemestre1, notaSemestre2) {
    let media = (notaSemestre1 + notaSemestre2) / 12
    return alert(`${media.toFixed(2)}`)
}

let notaSemestre1 = Number(prompt("Digita a nota do primeiro semestre"))
let notaSemestre2 = Number(prompt("Digite a nota do segundo semestre:"))

mediaAnual(notaSemestre1, notaSemestre2)

//ex 4
alert("ex 4")
function verificadorDivisor(a, b) {
    let verificando = a % b
    if (verificando === 0) {
        return alert("Divsao exata")
    } else {
        return alert(`Divisao nao exata, e o resto e: ${verificando}`)
    }
}

let a = Number(prompt("Digite um valor"))
let b = Number(prompt("Digite um valor"))

verificadorDivisor(a,b)

//ex 5
alert("ex 5")
function elevaQuadrado(u) {
    let quadrado = u**2
    return alert(`${quadrado}`)
}

let u = Number(prompt("Digite um valor:"))
elevaQuadrado(u)

//ex 6
alert("Ex 6:")
function mediaPonderada (q,w,r,s) {
    mediaP = (q + (w*2) + (r*3) + (s*4)) / 10
    return alert(`${mediaP.toFixed(1)}`)
}

let q = Number(prompt("Digite um valor"))
let w = Number(prompt("Digite um valor"))
let r = Number(prompt("Digite um valor"))
let s = Number(prompt("Digite um valor"))

mediaPonderada(q,w,r,s)
//Chamar monitor

//ex 7
alert("Ex 7:")
function mediaPonderadaConcurso(mat, port, cg, inf) {
    mediaPC = ((mat*2) + port + cg + inf) / 5
    return alert(`${mediaPC.toFixed(1)}`)
}

let mat = Number(prompt("Digite um valor"))
let port = Number(prompt("Digite um valor"))
let cg = Number(prompt("Digite um valor"))
let inf = Number(prompt("Digite um valor"))

mediaPonderadaConcurso(mat, port, cg, inf)
//Chamar monitor

//ex 8
alert("Ex 8:")
function investimento(inicial) {
    let final = inicial + (inicial*0.03)
    return alert(`${final.toFixed(1)}`)
}

let inicial = Number(prompt("Qual o valor da aplicacao?"))

investimento(inicial)

//ex 9
function areaTriangulo(base,height) {
    let areaTotal = (base*height)/2
    return alert(`${areaTotal.toFixed(1)}`)
}

let base = Number(prompt("Qual a base"))
let height = Number(prompt("Qual a altura?"))

areaTriangulo(base,height)
