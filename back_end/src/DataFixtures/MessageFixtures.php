<?php

namespace App\DataFixtures;

use App\Entity\Message;
use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class MessageFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        require_once 'vendor/autoload.php';

        $faker = Factory::create('fr_FR');


        for ($i = 0; $i < 50; $i++) {
            $product = (new Message())
                ->setName($faker->name())
                ->setEmail($faker->email())
                ->setSubject($faker->words(1, true))
                ->setDescription($faker->realText(200, 2))
                ->setDone(false)
                ;
            $manager->persist($product);
        }


        $manager->flush();

    }
}
