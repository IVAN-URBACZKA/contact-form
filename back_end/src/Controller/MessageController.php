<?php

namespace App\Controller;

use App\Entity\Message;
use App\Form\MessageType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MessageController extends AbstractController
{

    /**
     * JSON reciever - listener.
     * 
     * @Route("/api/message/new", name="api_new_message", methods={"POST", "GET"})
     */
    public function postData(Request $request, ManagerRegistry $doctrine)
    {
        // header("Access-Control-Allow-Origin: *");
        $data = json_decode($request->getContent());


        $em = $doctrine->getManager();
        $newMessage = (new Message())
            ->setName($data->name)
            ->setEmail($data->email)
            ->setSubject($data->subject)
            ->setDescription($data->description);
        $em->persist($newMessage);
        $em->flush();


        return new Response('Done.', Response::HTTP_OK);
    }
}
