function hitungZakatFitrah (jumlahOrang,hargaBeras) {
    const zakatFitrah = jumlahOrang * 2.5 * hargaBeras
    console.log ("zakat fitrah yang harus di bayar : Rp",zakatFitrah)
}

hitungZakatFitrah(3, 48000) 
                                // jumlah orang x harga beras per kg 

hitungZakatFitrah(4, 48000)

function hitungZakatMal (harta, hutang, hargaEmas) {
    const hartaBersih = harta - hutang
    const nisab = 85 * hargaEmas

    if (hartaBersih >= nisab) {
        const zakat = hartaBersih * 0.025
        console.log ("zakat kamu wajib zakat", zakat)
    } else {
        console.log ("zakat kamu belum wajib zakat")
    }
}

hitungZakatMal(200000000, 10000000, 214200000)

hitungZakatMal(200000000000, 10000000, 214200000)