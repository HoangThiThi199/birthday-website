function startBalloonsAndHearts() {
    const balloonsContainer = document.getElementById('balloons-container');
    const heartsContainer = document.getElementById('hearts-container');
    const colors = ['#ff4d4d', '#ffb3b3', '#ffcc00', '#66ccff', '#99ff99'];

    setInterval(() => {
        // Tạo Bóng bay (Dùng div CSS thành hình tròn đơn giản hoặc icon)
        const balloon = document.createElement('div');
        balloon.innerText = '🎈';
        balloon.style.fontSize = Math.random() * 20 + 30 + 'px';
        balloon.className = 'floating-item';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5s
        balloonsContainer.appendChild(balloon);

        // Tạo Tim
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.style.fontSize = Math.random() * 15 + 20 + 'px';
        heart.className = 'floating-item';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 4 + 's';
        heartsContainer.appendChild(heart);

        // Xóa phần tử sau khi bay xong để không nặng máy
        setTimeout(() => {
            balloon.remove();
            heart.remove();
        }, 6000);
    }, 500); // Mỗi 0.5s tạo 1 bóng/tim
}