// =====================================
// Elements
// =====================================

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typingArea = document.getElementById("typingArea");

// =====================================
// Send Message
// =====================================

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// =====================================
// Main Function
// =====================================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    addUserMessage(message);

    userInput.value = "";

    showTyping();

    setTimeout(() => {

        hideTyping();

        const reply = getBotReply(message);

        addBotMessage(reply);

    }, 1000);

}

// =====================================
// User Message
// =====================================

function addUserMessage(text) {

    const message = document.createElement("div");

    message.className = "message user-message";

    message.innerHTML = `

        <div class="message-content">

            <p>${text}</p>

            <span class="time">${getCurrentTime()}</span>

        </div>

        <div class="avatar">
            <i class="fa-solid fa-user"></i>
        </div>

    `;

    chatBox.appendChild(message);

    scrollBottom();

}

// =====================================
// Bot Message
// =====================================

function addBotMessage(text) {

    const message = document.createElement("div");

    message.className = "message bot-message";

    message.innerHTML = `

        <div class="avatar">
            <i class="fa-solid fa-robot"></i>
        </div>

        <div class="message-content">

            <p>${text}</p>

            <span class="time">${getCurrentTime()}</span>

        </div>

    `;

    chatBox.appendChild(message);

    scrollBottom();

}

// =====================================
// Typing Animation
// =====================================

function showTyping() {

    typingArea.style.display = "flex";

    scrollBottom();

}

function hideTyping() {

    typingArea.style.display = "none";

}

// =====================================
// Auto Scroll
// =====================================

function scrollBottom() {

    chatBox.scrollTop = chatBox.scrollHeight;

}

// =====================================
// Time
// =====================================

function getCurrentTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {

        hour: "2-digit",
        minute: "2-digit"

    });

}

// =====================================
// Basic Responses
// =====================================

function getBotReply(message) {

    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {

        return "Hello! 👋 Welcome to the Campus Assistant Chatbot.";

    }

    if (message.includes("course")) {

        return "We offer B.Tech, BCA, MCA, MBA, Diploma and M.Tech programs.";

    }

    if (message.includes("admission")) {

        return "Admissions are open. You can apply online or visit the admission office.";

    }

    if (message.includes("fees")) {

        return "Fees can be paid through UPI, Debit Card, Credit Card or Net Banking.";

    }

    if (message.includes("library")) {

        return "The library is open from 9:00 AM to 6:00 PM.";

    }

    return "I'm still learning. Please ask about Courses, Admission, Fees or Library.";

}

// =====================================
// Advanced Chatbot Responses
// =====================================

function getBotReply(message){

    message = message.toLowerCase().trim();

    // Greetings
    if(message.includes("hello") || message.includes("hi") || message.includes("hey")){
        return "👋 Hello! Welcome to the Campus Assistant Chatbot. How can I help you today?";
    }

    // Courses
    if(message.includes("course") || message.includes("program")){
        return "📘 We offer B.Tech, BCA, MCA, MBA, Diploma, M.Tech and Ph.D. programs.";
    }

    // Admission
    if(message.includes("admission") || message.includes("apply")){
        return "📝 Admissions are currently open. You can apply online through the college website or visit the admission office.";
    }

    // Fees
    if(message.includes("fee") || message.includes("fees")){
        return "💰 Fees can be paid using UPI, Debit Card, Credit Card, Net Banking or at the Accounts Office.";
    }

    // Library
    if(message.includes("library")){
        return "📚 The library is open from 9:00 AM to 6:00 PM on all working days.";
    }

    // Hostel
    if(message.includes("hostel")){
        return "🏠 Hostel facilities are available for both boys and girls with Wi-Fi, mess and 24×7 security.";
    }

    // Placement
    if(message.includes("placement") || message.includes("job")){
        return "🎓 Our Training & Placement Cell organizes campus drives, internships and skill development programs every year.";
    }

    // Scholarship
    if(message.includes("scholarship")){
        return "🏆 Scholarships are available based on merit, government schemes and reserved categories.";
    }

    // Contact
    if(message.includes("contact") || message.includes("phone") || message.includes("email")){
        return "☎ Admission Office\nPhone: +91-9876543210\nEmail: admission@college.edu";
    }

    // Timing
    if(message.includes("timing") || message.includes("time") || message.includes("working hours")){
        return "🕘 College Timing: Monday to Saturday, 9:00 AM - 5:00 PM.";
    }

    // Principal
    if(message.includes("principal")){
        return "👨‍🏫 Please visit the official college website for the latest Principal information.";
    }

    // Canteen
    if(message.includes("canteen") || message.includes("food")){
        return "🍔 The campus canteen serves breakfast, lunch and snacks from 8:00 AM to 5:00 PM.";
    }

    // Sports
    if(message.includes("sports")){
        return "⚽ Indoor and outdoor sports facilities are available including Cricket, Football, Volleyball, Badminton and Table Tennis.";
    }

    // Transport
    if(message.includes("bus") || message.includes("transport")){
        return "🚌 College bus facilities are available for various city routes.";
    }

    // WiFi
    if(message.includes("wifi") || message.includes("internet")){
        return "📶 Free Wi-Fi is available across the campus for students and faculty.";
    }

    // Internship
    if(message.includes("internship")){
        return "💼 Students receive internship opportunities through industry collaborations and placement support.";
    }

    // Thank You
    if(message.includes("thank")){
        return "😊 You're welcome! Happy to help.";
    }

    // Bye
    if(message.includes("bye") || message.includes("goodbye")){
        return "👋 Goodbye! Have a wonderful day.";
    }

    // Help
    if(message.includes("help")){
        return "🤖 You can ask me about Courses, Admission, Fees, Library, Hostel, Placement, Scholarship, Transport, Sports, Wi-Fi or Contact Information.";
    }

    // Default Response
    return "❓ Sorry, I couldn't understand your question. Please ask about Courses, Admission, Fees, Hostel, Placement, Scholarship, Library, Sports, Transport or Contact.";
}

// =====================================
// Quick Reply Buttons
// =====================================

const quickButtons = document.querySelectorAll(".quick-btn");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        userInput.value = button.innerText;

        sendMessage();

    });

});

// =====================================
// Clear Chat
// =====================================

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {

    if(confirm("Clear all chat messages?")){

        chatBox.innerHTML = "";

        localStorage.removeItem("campusChat");

        addBotMessage("👋 Chat cleared successfully! How can I help you today?");

    }

});

// =====================================
// Dark Mode
// =====================================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// =====================================
// Voice Recognition
// =====================================

const voiceBtn = document.getElementById("voiceBtn");

if("webkitSpeechRecognition" in window){

    const recognition = new webkitSpeechRecognition();

    recognition.lang="en-US";

    recognition.continuous=false;

    recognition.interimResults=false;

    voiceBtn.addEventListener("click",()=>{

        recognition.start();

    });

    recognition.onresult=function(event){

        userInput.value=event.results[0][0].transcript;

        sendMessage();

    };

}

// =====================================
// Text To Speech
// =====================================

function speak(text){

    if(!("speechSynthesis" in window)) return;

    const speech=new SpeechSynthesisUtterance();

    speech.text=text;

    speech.rate=1;

    speech.pitch=1;

    speech.volume=1;

    speechSynthesis.speak(speech);

}

// =====================================
// Override Bot Message
// =====================================

const originalBotMessage = addBotMessage;

addBotMessage = function(text){

    originalBotMessage(text);

    speak(text);

    saveChat();

};

// =====================================
// Save Chat
// =====================================

function saveChat(){

    localStorage.setItem(

        "campusChat",

        chatBox.innerHTML

    );

}

// =====================================
// Load Chat
// =====================================

window.addEventListener("load",()=>{

    const saved=localStorage.getItem("campusChat");

    if(saved){

        chatBox.innerHTML=saved;

        scrollBottom();

    }

});

// =====================================
// Save User Message
// =====================================

const originalUserMessage = addUserMessage;

addUserMessage=function(text){

    originalUserMessage(text);

    saveChat();

};

// =====================================
// Auto Focus
// =====================================

window.onload=function(){

    userInput.focus();

};