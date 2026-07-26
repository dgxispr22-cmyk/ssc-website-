function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function switchCategory(category) {
    // Nav bar active status change karne ke liye
    const buttons = document.querySelectorAll('.cat-link');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    console.log("Selected category: " + category);
}
