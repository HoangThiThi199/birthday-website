document.addEventListener('DOMContentLoaded', () => {
    // Các elements
    const loadingScreen = document.getElementById('loading-screen');
    const introScreen = document.getElementById('intro-screen');
    const giftScreen = document.getElementById('gift-screen');
    const birthdayScene = document.getElementById('birthday-scene');
    
    const progress = document.querySelector('.progress');
    const openGiftBtn = document.getElementById('open-gift-btn');
    const giftBox = document.getElementById('gift-box');
    const giftGlow = document.getElementById('gift-glow');
    const bgMusic = document.getElementById('bg-music');
    const replayBtn = document.getElementById('replay-btn');

    // 1. Loading Screen (Giả lập loading 2s)
    setTimeout(() => {
        progress.style.width = '100%';
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                introScreen.classList.remove('hidden');
            }, 1000);
        }, 2000);
    }, 100);

 // 2. Mở hộp quà từ Intro
    openGiftBtn.addEventListener('click', () => {
        // Bắt đầu phát nhạc ngay từ lần click đầu tiên này!
        bgMusic.play().catch(e => console.log("Trình duyệt chặn tự động phát nhạc"));

        introScreen.classList.add('fade-out');
        setTimeout(() => {
            introScreen.classList.add('hidden');
            giftScreen.classList.remove('hidden');
            giftScreen.classList.add('fade-in');
        }, 1000);
    });

    // 3. Click vào hộp quà để mở
    giftBox.addEventListener('click', () => {
        // Tắt rung, bật sáng
        // giftBox.classList.remove('shake-animation');
        giftGlow.classList.remove('hidden');
        giftGlow.classList.add('fade-in');
        
        // Chuyển sang màn hình chính
        setTimeout(() => {
            giftScreen.classList.add('fade-out');
            setTimeout(() => {
                giftScreen.classList.add('hidden');
                birthdayScene.classList.remove('hidden');
                birthdayScene.classList.add('fade-in');
                
                // Kích hoạt các hiệu ứng (KHÔNG cần gọi phát nhạc ở đây nữa)
                // startTypingEffect();
                startFireworks();
                startBalloonsAndHearts();
            }, 1000);
        }, 1500);
    });

    // 4. Nút Replay
    replayBtn.addEventListener('click', () => {
        location.reload(); // Tải lại trang từ đầu
    });
// 5. Hiệu ứng lật trang sách Album -> Biến mất -> Gọi chữ
    const pages = document.querySelectorAll('.page');
    const bookContainer = document.querySelector('.book-container'); // Tìm cuốn sách
    let isTypingStarted = false; 
    let flippedCount = 0; 

    pages.forEach((page) => {
        page.addEventListener('click', function() {
            // Xử lý lật qua / lật lại
            if (this.classList.contains('flipped')) {
                this.classList.remove('flipped');
                flippedCount--; 
            } else {
                this.classList.add('flipped');
                flippedCount++; 
            }

            // KIỂM TRA: Nếu đã lật đủ số trang (lật hết sách)
            if (flippedCount === pages.length && !isTypingStarted) {
                isTypingStarted = true; // Khóa lại để chỉ chạy 1 lần
                
                // 1. Đợi 0.8 giây cho hiệu ứng lật trang cuối cùng hoàn tất
                setTimeout(() => {
                    // Thêm class fade-out để cuốn sách mờ dần đi
                    bookContainer.classList.add('fade-out');
                    
                    // 2. Đợi thêm 1 giây cho sách mờ hẳn, rồi xóa nó đi và gọi chữ
                    setTimeout(() => {
                        bookContainer.classList.add('hidden'); // Xóa hẳn sách khỏi màn hình
                        startTypingEffect(); // Bắt đầu chạy lời chúc!
                    }, 1000); 
                    
                }, 800);
            }
        });
    });
});