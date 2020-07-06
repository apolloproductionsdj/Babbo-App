document.getElementById('button').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-bianca').style.display = 'flex';
  });

document.querySelector('.close-bianca').addEventListener('click', 
  function() {
    document.querySelector('.bg-modal-bianca').style.display = 'none';
  });

 $(document).ready(function () {
        var small={width: "200px",height: "116px"};
        var large={width: "400px",height: "232px"};
        var count=1; 
        $("#img-bianca").css(small).on('click',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });