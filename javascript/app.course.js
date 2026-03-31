class appCourse {
    constructor() {
        // waktu
        this.review = {
            modul: 15,
            latihan: 5,
            penilaian: 5
        };
        this.penyusunan = {
            module: 30,
            pelatihan: 7,
            penilaian_konseptual: 10,
            penilaian_praktek: 15
        };

        // jumlah
        this.jumlah = {
            totalModul: 60,
            totalPelatihan: 60,
            totalPenilaian: 45,
            totalPertemuan: 15
        };

        // rasio
        this.rasio = {
            konsep: 1, 
            praktek: 2
        };
    }

    
    total_rasio() {
       return this.rasio.konsep + this.rasio.praktek;
    }

    total_penilaian_konseptual() {
        
        return (this.rasio.konsep / this.total_rasio()) * this.jumlah.totalPenilaian;
    }

    total_penilaian_praktek(){
        
        return (this.rasio.praktek / this.total_rasio()) * this.jumlah.totalPenilaian;
    }

    penyusunan_total_jam_modul() {
        document.getElementById("sched-commod-time")

        return this.penyusunan.module * this.jumlah.totalModul;
    }
    // perkiraan waktu pekerjaan compiler untuk module

    penyusunan_total_jam_latihan() {
        document.getElementById("sched-comtra-time")

        return this.jumlah.totalPelatihan * this.penyusunan.pelatihan
    }
    // perkiraan waktu pekerjaan compiler untuk traine

    total_jam_penyusunan_penilaian_konseptual(){
        document.getElementById("sched-compra-time")

        return this.penyusunan.penilaian_konseptual * this.total_penilaian_konseptual();
    }
    // perkiraan waktu pekerjaan compiler untuk assignment conceptual

    total_jam_penyusunan_penilaian_praktek(){
        document.getElementById("sched-comcon-time")

        return this.penyusunan.penilaian_praktek * this.total_penilaian_praktek();
    }
    // perkiraan waktu pekerjaan compiler untuk assignment practical

    penyusunan_total_jam_penilaian(){
        document.getElementById("sched-comasi-time")

        return this.total_jam_penyusunan_penilaian_konseptual() + this.total_jam_penyusunan_penilaian_praktek();
    }
    // perkiraan waktu pekerjaan compiler untuk keseluruhan assignment

    review_total_jam_modul(){
        document.getElementById("sched-revmod-time")

        return this.review.modul * this.jumlah.totalModul;
    }
    // perkiraan waktu pekerjaan reviewer untuk keseluruhan module

    review_total_jam_latihan(){
        document.getElementById("sched-revtra-time")

        return this.review.latihan * this.jumlah.totalPelatihan;
    }
    // perkiraan waktu pekerjaan reviewer untuk keseluruhan traine

    review_total_jam_penilaian(){
        document.getElementById("sched-revasi-time")

        return this.review.penilaian * this.jumlah.totalPenilaian;
    }
    // perkiraan waktu pekerjaan reviewer untuk keseluruhan assignment

    total_module_keseluruhan_course(){
        document.getElementById("grand-module-time")

        return this.jumlah.totalModul;
    }
    // total module keseluruhan

    total_pelatihan_keseluruhan_course(){
        document.getElementById("grand-traine-time")

        return this.jumlah.totalPelatihan;
    }
    // total pelatihan keselurahan

    total_assignment_keseluruhan_course (){
        document.getElementById("grand-asigne-time")

        return this.jumlah.totalPenilaian;
    }
      // total assingment keselurahn

    total_pertemuan_keseluruhan_course(){
        document.getElementById("grand-meeter-time")

        return this.jumlah.totalPertemuan;
    }
    // total pertemuan keseluruhan

    total_compiler_module_sessi () {
        document.getElementById("compiler-sessi-module-time")

        return this.jumlah.totalModul / this.jumlah.totalPertemuan;
    }
    // total penyusunan modul per sesi

    total_compiler_pelatihan_sessi () {
        document.getElementById("compiler-sessi-traine-time")

        return this.jumlah.totalPelatihan / this.jumlah.totalPertemuan
    }
    // total penyusunan pelatihan per sesi

    total_waktu_compiler_module_sessi () {
        document.getElementById("compiler-sessi-")

        return this.total_compiler_module_sessi() * this.penyusunan.module;
    }
    // total waktu penyusunan module per sesi

    total_waktu_compiler_pelatihan_sessi () {
        return this.total_compiler_pelatihan_sessi() * this.penyusunan.pelatihan;
    }
    // total waktu penyusunan pelatihan per sesi

    total_waktu_compiler_concept_sessi () {
        return this.rasio.konsep * this.penyusunan.penilaian_konseptual;
    }
    // total waktu penyusunan penilaian konseptual per sesi

    total_waktu_compiler_practic_sessi () {
        return this.rasio.praktek * this.penyusunan.penilaian_praktek;
    }
    // total waktu penyusunan penilaian praktek per sesi

    total_waktu_compiler_assign_sessi () {
        return this.total_waktu_compiler_concept_sessi() + this.total_waktu_compiler_practic_sessi();
    }
    // total waktu penyusunan penilaian per sessi

    total_waktu_review_module_sessi () {
        return this.total_compiler_module_sessi() * this.review.modul;
    }
    // total waktu review modul per sesi

    total_waktu_review_pelatihan_sessi () {
        return this.total_compiler_pelatihan_sessi() * this.review.latihan;
    }
    // total waktu review pelatihan per sesi

    total_waktu_review_assignment_sessi () {
        return this.total_rasio() * this.review.penilaian;
    }
    // total waktu review pelatihan per sesi

}

// Inisialisasi
const course = new appCourse();

console.log("=== RINGKASAN KESELURUHAN KURSUS ===");
console.log("Total Modul      :", course.total_module_keseluruhan_course(), "unit");
console.log("Total Pelatihan  :", course.total_pelatihan_keseluruhan_course(), "unit");
console.log("Total Assignment :", course.total_assignment_keseluruhan_course(), "unit");

console.log("\n=== ESTIMASI PENYUSUNAN (COMPILER) PER SESI ===");
console.log("Modul per Sesi   :", course.total_compiler_module_sessi(), "unit");
console.log("Waktu Modul      :", course.total_waktu_compiler_module_sessi(), "menit");
console.log("Waktu Pelatihan  :", course.total_waktu_compiler_pelatihan_sessi(), "menit");
console.log("Waktu Assignment :", course.total_waktu_compiler_assign_sessi(), "menit (Konsep + Praktek)");

console.log("\n=== ESTIMASI REVIEW PER SESI ===");
console.log("Waktu Review Modul  :", course.total_waktu_review_module_sessi(), "menit");
console.log("Waktu Review Latih  :", course.total_waktu_review_pelatihan_sessi(), "menit");
console.log("Waktu Review Assign :", course.total_waktu_review_assignment_sessi(), "menit");

console.log("\n=== TOTAL WAKTU KUMULATIF (MENIT) ===");
console.log("Total Jam Penyusunan Modul    :", course.penyusunan_total_jam_modul());
console.log("Total Jam Penyusunan Pelatihan:", course.penyusunan_total_jam_latihan());
console.log("Total Jam Penyusunan Penilaian:", course.penyusunan_total_jam_penilaian());
console.log("Total Jam Review Modul        :", course.review_total_jam_modul());


