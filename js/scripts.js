
// profile js
	$(document).ready(function() {


    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#profile-image1').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $("#profile-image-upload").on('change', function(){
        readURL(this);
    });

   $('#profile-image1').on('click', function() {
       $("#profile-image-upload").click();
    });
});


// $(function() {
// $('#profile-image1').on('click', function() {
// $('#profile-image-upload').click();
// });
// });
