const hitung = () => {
    let angka1 = parseInt(document.getElementById("angka1").value)
    let angka2 = parseInt(document.getElementById("angka2").value)
    let hasil = document.getElementById("hasil")
    let opt = document.getElementById("operator").value
    
    if (opt=='tambah'){
        hasil.value = angka1 + angka2;
    }
    else if(opt == 'kurang'){
        hasil.value = angka1 - angka2;
    }
    else if(opt == 'kali'){
        hasil.value = angka1 * angka2;
    }
    else if(opt == 'pangkat'){
        hasil.value = angka1 ** angka2;
    }
    else {
        hasil.value = angka1 / angka2;
    }
    return hasil
}