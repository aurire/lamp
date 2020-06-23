<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ShareNoteToUserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     collectionOperations={
 *         "get" = {
 *
 *
 *          },
 *         "post" = {
 *             "access_control" = "is_granted('ROLE_USER')",
 *             "validation_groups" = { "Default", "create"}
 *         }
 *
 *     },
 *     itemOperations={
 *         "get" = {"security" = "is_granted('ROLE_USER')"},
 *         "put" = {"security" = "is_granted('ROLE_USER') and object == user"},
 *         "delete" = {"security" = "is_granted('ROLE_ADMIN')"}
 *     },
 *     normalizationContext={"groups"={"share:read"}},
 *     denormalizationContext={"groups"={"share:write"}}
 * )
 * @ORM\Entity(repositoryClass=ShareNoteToUserRepository::class)
 */
class ShareNoteToUser
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Note::class, inversedBy="user")
     * @Groups({"share:read", "share:write"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $note;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="sharedNotes")
     * @Groups({"share:read", "share:write"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNote(): ?Note
    {
        return $this->note;
    }

    public function setNote(?Note $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
