function startTypingEffect() {
    // Thay \n bằng <br>
    const text = "Happy Birthday Hương ❤️<br><br>May every day bring you happiness,<br>health, and success.<br>Never stop smiling!";
    const container = document.getElementById('typing-text');
    container.innerHTML = ""; // Đổi thành innerHTML
    
    let i = 0;
    function type() {
        if (i < text.length) {
            // Kiểm tra nếu là ký tự '<', đây là bắt đầu của thẻ <br>
            if (text.substring(i, i + 4) === "<br>") {
                container.innerHTML += "<br>";
                i += 4;
            } else {
                container.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, 50); // Tốc độ gõ 50ms cho mượt
        }
    }
    type();
}