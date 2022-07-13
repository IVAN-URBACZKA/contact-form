<?php

namespace App\Controller;

use App\Entity\Message;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
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


   /**
     *  JSON sender - handler
     * @Route("/api/message/search/{email}", name="api_message_search",  methods={"GET"})
     */
    public function searchmessage(ManagerRegistry $doctrine,$email): JsonResponse
    {

        $messages = $doctrine->getRepository(Message::class)->findBy(
            [
            
            "email" => $email
        
            ]
        );

        $data = [];

        foreach ($messages as $req) {
            $data[] = [
                "id" => $req->getId(),
               "name" =>  $req->getName(),
               "subject" => $req->getSubject(),
               "email" => $req->getEmail(),
               "description" =>$req->getDescription()
            ];
        }

        json_encode($data);
        return new JsonResponse($data);
    }

 /**
     *  JSON sender - handler
     * @Route("/api/message/{id}", name="api_message_send", methods={"GET"})
     */
    public function readOneMessage(EntityManagerInterface $entityManager, $id): Response
    {
        $req = $entityManager->getRepository(Message::class)->find($id);
        
        $message = [
            "id" => $req->getId(),
               "name" =>  $req->getName(),
               "subject" => $req->getSubject(),
               "email" => $req->getEmail(),
               "description" =>$req->getDescription()
        ];

        

        $dataenc = json_encode($message);

        $response = new Response($dataenc, Response::HTTP_OK);
        return $response;
    }


     /**
     *  JSON sender - handler
     * @Route("/api/delete/message/{id}", name="api_message_delete")
     */
    public function deleteMessage(EntityManagerInterface $em, $id): Response
    {
        $message = $em->getRepository(Message::class)->find($id);
        
        

        $em->remove($message);
        $em->flush();


        return new Response("delete",Response::HTTP_OK);
    }



}