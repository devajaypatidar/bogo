document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            // Toggle the visibility of the hidden content associated with the clicked checkbox
            const hiddenContent = checkbox.parentElement.querySelector('.hidden');
            if (hiddenContent) {
                // Hide all hidden content
                checkboxes.forEach(cb => {
                    const cbHiddenContent = cb.parentElement.querySelector('.hidden');
                    if (cbHiddenContent) {
                        cbHiddenContent.style.display = 'none';
                    }
                });
                // Show hidden content associated with the clicked checkbox
                hiddenContent.style.display = checkbox.checked ? 'block' : 'none';
            }
        });
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            checkboxes.forEach(cb => {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
});
