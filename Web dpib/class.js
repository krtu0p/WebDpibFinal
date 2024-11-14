// Ambil elemen tombol dan div tabel
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const classLabel = document.getElementById('class-label');
const dpib1Button = document.getElementById('dpib1-button');
const dpib2Button = document.getElementById('dpib2-button');
const dpib3Button = document.getElementById('dpib3-button');

// Kelas dan DPIB yang akan digunakan
let currentClass = 'X';  // Kelas default adalah X
let currentDpib = 'DPIB 1'; // Subkelas default adalah DPIB 1

// Pilihan tabel berdasarkan kelas dan DPIB
const tables = {
    'X': {
        'DPIB 1': document.querySelector('.XDPIB1'),
        'DPIB 2': document.querySelector('.XDPIB2'),
        'DPIB 3': document.querySelector('.XDPIB3'),
    },
    'XI': {
        'DPIB 1': document.querySelector('.XIDPIB1'),
        'DPIB 2': document.querySelector('.XIDPIB2'),
        'DPIB 3': document.querySelector('.XIDPIB3'),
    },
    'XII': {
        'DPIB 1': document.querySelector('.XIIDPIB1'),
        'DPIB 2': document.querySelector('.XIIDPIB2'),
        'DPIB 3': document.querySelector('.XIIDPIB3'),
    }
};

// Fungsi untuk menyembunyikan semua tabel
function hideAllTables() {
    Object.values(tables).forEach(dpibGroup => {
        Object.values(dpibGroup).forEach(table => {
            table.style.display = 'none';
        });
    });
}

// Fungsi untuk menampilkan tabel yang dipilih
function showTable(classGroup, dpibType) {
    hideAllTables();
    tables[classGroup][dpibType].style.display = 'block';
}

// Event listener untuk tombol **prev** dan **next** (kelas)
prevButton.addEventListener('click', () => {
    if (currentClass === 'X') {
        currentClass = 'XII';  // Jika kelas X, pindah ke kelas XII
    } else if (currentClass === 'XI') {
        currentClass = 'X';   // Jika kelas XI, pindah ke kelas X
    } else {
        currentClass = 'XI';  // Jika kelas XII, pindah ke kelas XI
    }

    classLabel.textContent = currentClass;  // Ubah label kelas
    showTable(currentClass, currentDpib);  // Tampilkan tabel untuk kelas dan subkelas saat ini
});

nextButton.addEventListener('click', () => {
    if (currentClass === 'X') {
        currentClass = 'XI';  // Jika kelas X, pindah ke kelas XI
    } else if (currentClass === 'XI') {
        currentClass = 'XII';  // Jika kelas XI, pindah ke kelas XII
    } else {
        currentClass = 'X';  // Jika kelas XII, pindah ke kelas X
    }

    classLabel.textContent = currentClass;  // Ubah label kelas
    showTable(currentClass, currentDpib);  // Tampilkan tabel untuk kelas dan subkelas saat ini
});

// Event listener untuk tombol DPIB 1, 2, dan 3
dpib1Button.addEventListener('click', () => {
    currentDpib = 'DPIB 1';  // Pilih DPIB 1
    showTable(currentClass, currentDpib);  // Tampilkan tabel untuk kelas dan DPIB 1
});

dpib2Button.addEventListener('click', () => {
    currentDpib = 'DPIB 2';  // Pilih DPIB 2
    showTable(currentClass, currentDpib);  // Tampilkan tabel untuk kelas dan DPIB 2
});

dpib3Button.addEventListener('click', () => {
    currentDpib = 'DPIB 3';  // Pilih DPIB 3
    showTable(currentClass, currentDpib);  // Tampilkan tabel untuk kelas dan DPIB 3
});

// Sembunyikan semua tabel pada saat load awal
hideAllTables();

// Tampilkan tabel default (kelas X, DPIB 1) saat halaman pertama dimuat
showTable(currentClass, currentDpib);
