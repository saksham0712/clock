﻿# Digital Clock with Alarm

A simple digital clock web application that displays the current time in a large 12-hour format with AM/PM and includes an alarm feature. Users can set an alarm, which will ring with a sound and a notification, even if they navigate to a different page (supported by `localStorage`).

## Features

- Displays current time in 12-hour format with AM/PM.
- Allows users to set an alarm for a specified time.
- Rings the alarm with a sound and notification (if notifications are permitted) when the set time is reached.
- Alarm persists even when navigating between pages due to `localStorage` integration.
- ### Also very usefull in mobile phones (fullscreen in landscape mode)


## Live Preview

- [link](https://saksham0712.github.io/clock/)

## Screenshot

![Digital Clock with Alarm](./screenshot.png)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saksham0712/clock.git
   ```

2. Navigate to the project directory:

   ```bash
   cd clock
   ```

3. Open `index.html` in a web browser to view the digital clock and alarm.

## Usage

1. View the current time in the clock display.
2. Set the alarm:
   - Enter the time in the `HH:MM` format using the input field.
   - Click on **Set Alarm**. A message confirming the alarm time will appear.
3. Clear the alarm:
   - Click on **Clear Alarm** to remove the set alarm.
4. The alarm will ring with a sound and display a notification at the set time. If notifications are allowed in the browser, you'll also receive a desktop notification.

## Technologies Used

- HTML
- CSS
- JavaScript

