<?php

namespace App\Controller;

use App\Entity\Message;
use Doctrine\ORM\EntityManagerInterface;
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


   /**
     *  JSON sender - handler
     * @Route("/api/message/search/{searchTerm}", name="api_message_search")
     */
    public function searchmessage(EntityManagerInterface $entityManager, $searchTerm): Response
    {
        $query = $entityManager->createQuery("SELECT m FROM App:Message AS m WHERE LOWER(m.email) LIKE :search");
        $query->setParameter('search',  $searchTerm );
        $messages = $query->getResult();

        $data = [];

        foreach ($messages as $message) {
            $data[] = [
                'id' => $message->getId(),
                'name' => $message->getName(),
                'email' => $message->getEmail(),
                'subject' => $message->getSubject(),
                'description' => $message->getDescription(),

            ];
        }
        $dataenc = json_encode($data);
        return new Response($dataenc, Response::HTTP_OK);
    }



}