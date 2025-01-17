function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}

function searchSkins() {
    const playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert("يرجى إدخال اسم اللاعب!");
        return;
    }
    alert(`جاري البحث عن السكنات الخاصة باللاعب: ${playerName}`);
}

function uploadSkin() {
    const fileInput = document.getElementById('skinFile');
    if (!fileInput.files.length) {
        alert("يرجى اختيار ملف السكن.");
        return;
    }
    document.getElementById('uploadStatus').innerText = "تم رفع السكن بنجاح!";
}