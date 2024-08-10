document.addEventListener("DOMContentLoaded", function () {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysElement = document.querySelector(".days");
    let currentDate = new Date();

    function generateCalendar(date) {
        const currentMonthIndex = date.getMonth();
        const currentYear = date.getFullYear();

        // Update header with current month and year
        document.getElementById("current-month").textContent = `${months[currentMonthIndex]} ${currentYear}`;
        document.getElementById("full-date").textContent = date.toDateString();

        // Calculate the first day and last day of the current month
        const firstDayOfTheMonth = new Date(currentYear, currentMonthIndex, 1).getDay();
        const lastDay = new Date(currentYear, currentMonthIndex + 1, 0).getDay();
        const numberOfDaysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

        let daysHTML = "";

        // Add empty days before the first day of the month
        for (let i = 0; i < firstDayOfTheMonth; i++) {
            daysHTML += `<p class="date"></p>`;
        }

        // Add days of the month
        for (let date = 1; date <= numberOfDaysInMonth; date++) {
            const className = new Date().getDate() === date ? "date today" : "date";
            daysHTML += `<p class="${className}">${date}</p>`;
        }

        // Add empty days after the last day of the month if needed
        if (lastDay < 6) {
            for (let i = lastDay; i < 6; i++) {
                daysHTML += `<p class="date"></p>`;
            }
        }

        daysElement.innerHTML = daysHTML;
    }

    function updateCalendar(offset) {
        // Update the month based on the offset (-1 for previous, +1 for next)
        currentDate.setMonth(currentDate.getMonth() + offset);
        generateCalendar(currentDate);
    }

    document.getElementById("prev-month").addEventListener("click", () => {
        updateCalendar(-1);
    });

    document.getElementById("next-month").addEventListener("click", () => {
        updateCalendar(1);
    });

    // Initial calendar render
    generateCalendar(currentDate);
});
