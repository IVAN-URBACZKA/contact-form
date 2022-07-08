import React, { Component } from 'react';

class HomeView extends Component {
    render() {
        return (
            <div className='m-5'>
                <h3 className='text-center m-5'>Exercice technique / fonctionnel utilisé par ACSEO pour ses recrutements.</h3>
                <h4 className='text-center mb-2 font-bold'>Contexte</h4>
                <p  className='text-center mb-2'>Vous êtes développeur chez ACSEO. Vous recevez une demande de la part d'un client pour la mise en place d'une nouvelle fonctionnalité sur son site Internet.</p>
                <p  className='text-center mb-2 '>Nous souhaiterions mettre en place un formulaire de contact sur notre site.<br></br> Le formulaire de contact doit être simple : il doit nous permettre de connaitre les coordonnées de l'internaute, et sa question.<br></br> Il nous faut au moins son nom, son email, et sa question pour que nous traitions sa demande.</p>
                <p  className='text-center mb-2 '>Il nous faudrait aussi un petit back-office avec accès sécurisé pour permettre au webmaster de consulter la liste des demandes, et de pouvoir cocher les messages que nous avons traité</p>
                <h4 className='text-center mt-2 mb-2 font-bold'>Les règles de gestion suivantes sont à mettre en place :</h4>
                <p className='text-center mb-2 '>Un utilisateur qui dépose plusieurs demande de contact avec le même email, doit voir ses demandes regroupées et se cumulées pour ce contact</p>
                <p className='text-center mb-2 '>Toute demande de contact doit déclencher la création d'un fichier JSON unique dans un répertoire spécifique non exposé par le serveur web, qui contient l'ensemble du contenu de la demande : informations du contact et contenu de la demande. A terme d'autres notifications seront déclenchées.</p>
                <p className='text-center mb-2 '>Il vous est demandé de mettre en place la solution sur la base du Framework Symfony.</p>

                <p className=' text-2xl	font-bold text-red-600 text-center mb-2'><a href="http://localhost:3000/contact-form"> Formulaire de contact disponible ici </a></p>
            </div>
        );
    }
}

export default HomeView;