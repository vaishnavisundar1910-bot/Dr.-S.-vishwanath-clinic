document.getElementById("appointmentForm")
.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let appointment = {
        name: name,
        date: date,
        time: time,
        status: "Pending"
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    document.getElementById("message").innerText =
        "Appointment Request Sent Successfully!";

    document.getElementById("appointmentForm").reset();
});
