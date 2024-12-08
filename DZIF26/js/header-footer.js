 // 動態載入 header 和 footer
 fetch('../html/header.html')
 .then(response => response.text()) // 取得 HTML 內容
 .then(html => {
     document.getElementById('header-container').innerHTML = html; // 把 HTML 插入到頁面中
 })
 .catch(error => console.error('Error loading header:', error));

fetch('../html/footer.html')
 .then(response => response.text()) // 取得 HTML 內容
 .then(html => {
     document.getElementById('footer-container').innerHTML = html; // 把 HTML 插入到頁面中
 })
 .catch(error => console.error('Error loading footer:', error));
function openNav() { 
if (window.innerWidth < 768) { // 只有手機版執行
 document.getElementById("sidebar").style.width = "250px"; // 展開側邊欄
 document.querySelector(".hamburger").style.display = "none"; // 隱藏漢堡選單按鈕
}
}

function closeNav() {
if (window.innerWidth < 768) { // 只有手機版執行
 document.getElementById("sidebar").style.width = "0"; // 收起側邊欄
 document.querySelector(".hamburger").style.display = "block"; // 顯示漢堡選單按鈕
}
}