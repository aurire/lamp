<?php


namespace App\Tests\Functional;

use App\Entity\User;
use App\Test\CustomApiTestCase;
use Doctrine\ORM\EntityManagerInterface;
use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;

class NoteResourceTest extends CustomApiTestCase
{
    use ReloadDatabaseTrait;

    public function testCreateNote()
    {
        $client = self::createClient();

        $client->request(
            'POST',
            '/api/notes',
            ['headers' => ['Content-Type' => 'application/json'], 'json' => []]
        );

        $this->assertResponseStatusCodeSame(401);

        $this->createUserAndLogin($client, 'tester@testit.com', 'foo');
    }
}