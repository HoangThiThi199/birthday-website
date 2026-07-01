function startTypingEffect() {
    const text = "Happy Birthday Thi ❤️\n\nMay every day bring you happiness,\nhealth, and success.\nNever stop smiling!";
    const container = document.getElementById('typing-text');
    container.innerText = "";
    
    let i = 0;
    function type() {
        if (i < text.length) {
            container.innerText += text.charAt(i);
            i++;
            setTimeout(type, 100); // Tốc độ gõ 100ms
        }
    }
    type();
}