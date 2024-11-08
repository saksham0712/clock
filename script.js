let alarmTime = null;
const alarmSound = document.getElementById('alarmSound');

// Request notification permission
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Function to display current time
function updateClock() {
    const now = new Date();
    let hours = now.getHours();  // Change this to 'let' to allow reassignment
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format and use "12" for midnight/noon

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Check if the current time matches the alarm time
    const currentTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    if (alarmTime && currentTime === alarmTime) {
        document.getElementById('alarmMessage').textContent = '⏰ Alarm ringing!';
        triggerAlarm();
        clearAlarm();  // Clear alarm once it rings
    }
}

// Set interval to update clock every second
setInterval(updateClock, 1000);

// Function to set the alarm
function setAlarm() {
    let alarmInput = document.getElementById('alarmTime').value;
    const [hours, minutes] = alarmInput.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const alarmHour = (hours % 12 || 12).toString().padStart(2, '0');
    alarmTime = `${alarmHour}:${minutes} ${ampm}`;

    if (alarmTime) {
        document.getElementById('alarmMessage').textContent = `Alarm set for ${alarmTime}`;
    }
}

// Function to set an alarm based on a selected time interval
function setQuickAlarm() {
    const selectedInterval = document.getElementById('quickAlarmOptions').value;
    if (!selectedInterval) return; // If no option is selected, do nothing

    const now = new Date();
    now.setMinutes(now.getMinutes() + parseInt(selectedInterval, 10)); // Add the selected minutes
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format and use "12" for midnight/noon

    alarmTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    document.getElementById('alarmMessage').textContent = `Alarm set for ${alarmTime}`;
}

// Function to clear the alarm
function clearAlarm() {
    alarmTime = null;
    document.getElementById('alarmMessage').textContent = 'Alarm cleared';
}

// Function to trigger the alarm with sound and notification
function triggerAlarm() {
    alarmSound.play();  // Play the alarm sound

    // Send a notification
    if (Notification.permission === "granted") {
        new Notification("⏰ Alarm ringing!", { body: "Your alarm is going off!" });
    } else {
        alert("⏰ Alarm ringing!");
    }
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// for color mode 
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}