
 document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownBox = document.querySelector('.dropdown-box');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the link from navigating

        // Toggle the dropdown box visibility
        dropdownBox.classList.toggle('show');
    });

    // Optional: Close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownBox.contains(event.target)) {
            dropdownBox.classList.remove('show');
        }
    });
});


