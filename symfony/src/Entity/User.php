<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

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
 *         "get" = {
 *             "security" = "is_granted('IS_AUTHENTICATED_ANONYMOUSLY')",
 *             "normalization_context"={"groups"={"user:read", "user:item:get"}}
 *         },
 *         "put" = {"security" = "is_granted('ROLE_USER') and object == user"},
 *         "delete" = {"security" = "is_granted('ROLE_ADMIN')"}
 *     },
 *     normalizationContext={"groups"={"user:read"}},
 *     denormalizationContext={"groups"={"user:write"}}
 * )
 * @UniqueEntity(fields={"email"})
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(SearchFilter::class, properties={"email": "partial"})
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"user:read", "user:write", "notes:item:get", "notes:write"})
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups({"admin:write"})
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @Groups({"user:write"})
     * @SerializedName("password")
     * @Assert\NotBlank(groups={"create"})
     */
    private $plainPassword;

    /**
     * @ORM\OneToMany(targetEntity=Note::class, mappedBy="owner", cascade={"persist"}, orphanRemoval=true)
     * @Groups({"user:read", "user:write"})
     * @Assert\Valid()
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"admin:read", "owner:read", "user:write"})
     */
    private $phoneNumber;

    /**
     * @Groups({"user:read", "user:write"})
     * @ORM\OneToMany(targetEntity=ShareNoteToUser::class, mappedBy="user", orphanRemoval=true)
     */
    private $sharedNotes;

    public function __construct()
    {
        $this->notes = new ArrayCollection();
        $this->sharedNotes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    public function addNote(Note $note): self
    {
        if (!$this->notes->contains($note)) {
            $this->notes[] = $note;
            $note->setOwner($this);
        }

        return $this;
    }

    public function removeNote(Note $note): self
    {
        if ($this->notes->contains($note)) {
            $this->notes->removeElement($note);
            // set the owning side to null (unless already changed)
            if ($note->getOwner() === $this) {
                $note->setOwner(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    /**
     * @return Collection|ShareNoteToUser[]
     */
    public function getSharedNotes(): Collection
    {
        return $this->sharedNotes;
    }

    public function addSharedNote(ShareNoteToUser $sharedNote): self
    {
        if (!$this->sharedNotes->contains($sharedNote)) {
            $this->sharedNotes[] = $sharedNote;
            $sharedNote->setUser($this);
        }

        return $this;
    }

    public function removeSharedNote(ShareNoteToUser $sharedNote): self
    {
        if ($this->sharedNotes->contains($sharedNote)) {
            $this->sharedNotes->removeElement($sharedNote);
            // set the owning side to null (unless already changed)
            if ($sharedNote->getUser() === $this) {
                $sharedNote->setUser(null);
            }
        }

        return $this;
    }
}
