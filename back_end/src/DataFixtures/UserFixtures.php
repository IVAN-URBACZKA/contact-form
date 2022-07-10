<?php

namespace App\DataFixtures;

use App\Entity\User;
use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        require_once 'vendor/autoload.php';

        $faker = Factory::create('fr_FR');


            $user = (new User())
                ->setEmail($faker->email())
                ->setRoles(["ROLE_ADMIN"])
                ->setPassword($faker->password());
        
        
                
            $manager->persist($user);
            $manager->flush();

        }



    }

