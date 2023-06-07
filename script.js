$(document).ready(function() {
    $('#wheel').click(function() {
        // Rastgele bir sayı elde etmek için 1 ile 10 arasında bir değer oluşturun
        var randomNumber = Math.floor(Math.random() * 10) + 1;

        // Çarkın dönmesi için bir animasyon uygulayın
        $('#wheel').css('animation', 'spin 3s ease-out');

        // 3 saniye sonra çarkın dönmesini durdurun ve rastgele sayıyı gösterin
        setTimeout(function() {
            $('#wheel').css('animation', 'none');
            alert('Kazanan sayı: ' + randomNumber);
        }, 3000);
    });
});
