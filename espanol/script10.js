document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profileImage').setAttribute('src', event.target.result);
        };
        reader.readAsDataURL(file);
    }
});
