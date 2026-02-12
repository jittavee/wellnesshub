function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// ปิดเมนูเมื่อคลิกที่อื่นในหน้าเว็บ (Optional)
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const btn = document.querySelector('.mobile-menu-btn');
    
    // ถ้าคลิกไม่ได้อยู่ที่ nav หรือ ปุ่มเมนู ให้ปิด nav
    if (!nav.contains(event.target) && !btn.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

/* --- ส่วนควบคุมสไลด์โชว์ --- */
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // ซ่อนทุกรูปก่อน
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // รีเซ็ตจุดทั้งหมด
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // แสดงรูปปัจจุบัน และทำให้จุดเป็นสีเข้ม
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    // ตั้งเวลาเปลี่ยนรูปทุก 4 วินาที (4000 มิลลิวินาที)
    setTimeout(showSlides, 4000); 
}
function saveNewPatient(name, imgSrc) {
    // 3.1 รับค่าอายุจากช่องที่สร้างใหม่
    const ageVal = document.getElementById('newPatientAge').value || "-";

    const newPatient = {
        id: Date.now(),
        name: name,
        age: ageVal, // <--- เพิ่มบรรทัดนี้ (เก็บอายุลงก้อนข้อมูล)
        photo: imgSrc,
        records: []
    };
    
    // ... (โค้ดบันทึกเดิม patientsData.push...) ...

    // ล้างช่องอายุให้ว่างหลังจากกดเพิ่ม
    document.getElementById('newPatientAge').value = ''; 
}