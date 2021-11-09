// alert('coucou');

// on fait tune fonction anonyme 

$(function() {

    // les variables pour récupérer les id de la page index-correction.html

    var choixChat= $('#choix'); // on cherche le select
    // console.log(choixChat);
    var raisonChoix = $('#raison'); // on cherche le textarea
    // console.log(raisonChoix);

    var erreurs = false;

    //soumission du formulaire
    // if else

    $('#adopteChat').on('submit', function(e){
        e.preventDefault(); // on empêche l'envoi du formulaire

        //on vérifie la longueur de la valeur sélectionnée dans le sect 
        // les classes qu'on ajoute alert etc. viennent de bootstrap
        //on applique à la classe parente qui est "form-group"
        if (choixChat.val().length == 0) {
            choixChat.parent().addClass('alert alert-danger');
            erreurs = true; 
        } else {
            choixChat.parent().addClass('alert alert-success');
        }

        //on vérifie la longueur du textarea (min 15 caractères)
        if(raisonChoix.val().length <= 15) {
            raisonChoix.parent().addClass('alert alert-danger');
            erreurs = true;
        } else {
            raisonChoix.parent().addClass('alert alert-success')
        }

        if(erreurs === false) {
            $(this).replaceWith('<div class="alert alert-success"> Merci pour votre bonté ! Votre demande va être étudiée dans les plus brefs délais. </div>')
        }


    });

    choixChat.on('change', function(){
        $(this).parent().removeClass('alert alert-danger');
        erreurs = false;
    }); //fin fonction anonyme pour enlever la classe 'danger'

    raisonChoix.on('change', function(){
        $(this).parent().removeClass('alert alert-danger');
        erreurs = false;
    });//fin fonction anonyme pour enlever la classe 'danger'

});