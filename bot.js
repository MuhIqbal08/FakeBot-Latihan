
const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const btn = document.getElementById("btn")
const loading = document.getElementById("loaders")
const container = document.getElementsByClassName("wrapper")
let init = 0
loading.style.display = "none"

const botSay = (data) => {
    return [
        `Selamat datang, Siapa nama anda?`,
        `Halo ${data?.nama}, Umur anda berapa?`,
        `Oh ${data?.usia}, Hobi anda apa ya?`,
        `Wah sama, hobi saya juga ${data?.hobi}, Apakah anda punya pacar?`,
        `Ohh ${data?.pacar}, yasudah deh udahan dulu ya! bye!!`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

const botStart = () => {
    if(jawaban.value.length < 1) return alert("Silahkan isi jawaban!")
    init++
    if (init === 1) {
        botDelay({ nama : jawaban.value })
    } else if (init === 2) {
        botDelay({ usia : jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi : jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar : jawaban.value })
    } else {
        finishing()
    }
}

const botDelay = (jawabanUser) => {
    loading.style.display = "block"
    container[0].style.filter = "blur(3px)"
    setTimeout(() => {
        loading.style.display = "none"
        container[0].style.filter = "none"
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, 1500);
    userData.push(jawaban.value)
    jawaban.value =""
}

const finishing = () => {
    console.log(userData[0]);
    jawaban.value =""
    setTimeout(() => {
        pertanyaan.innerHTML = `Terima kasih ${userData[0]} sudah mengunjungi saya!!`
    }, 1500);
    jawaban.setAttribute("disabled", "true")
    btn.textContent = "refresh"
    btn.addEventListener ("click", () => {
        location.reload()
    })
}