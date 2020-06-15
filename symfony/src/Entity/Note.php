<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\NoteRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use Symfony\Component\Validator\Constraints as Assert;
// *             "security" = "is_granted('ROLE_USER')"
/**
 * @ApiResource(
 *     collectionOperations={
 *         "get"={
 *             "security"
 *         },
 *         "post"={
 *             "security"
 *         }
 *     },
 *     itemOperations={
 *         "get",
 *         "put"
 *     },
 *     normalizationContext={"groups"={"notes:read"}},
 *     denormalizationContext={"groups"={"notes:write"}},
 *     attributes={
 *         "pagination_items_per_page"=2
 *     }
 * )
 *
 * @ORM\Entity(repositoryClass=NoteRepository::class)
 * @ApiFilter(BooleanFilter::class, properties={"isPublic"})
 * @ApiFilter(SearchFilter::class, properties={"title": "partial", "message": "partial"})
 * @ApiFilter(PropertyFilter::class)
 */
class Note
{

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"notes:read", "notes:write"})
     * @Assert\NotBlank()
     * @Assert\Length(
     *     min=2,
     *     max=255,
     *     maxMessage="Max title length is 255 characters"
     * )
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"notes:read"})
     * @Assert\NotBlank()
     * @Assert\Length(
     *     min=2,
     *     max=255,
     *     maxMessage="Max message length is 255 characters"
     * )
     */
    private $message;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"notes:read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"notes:read", "notes:write"})
     */
    private $isPublic;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    /**
     * @Groups("notes:read")
     */
    public function getShortMessage(): ?string
    {
        return strlen($this->message) < 40 ? $this->message : substr(strip_tags($this->message), 0, 40) . '...';
    }

    /**
     * Raw text for the message
     *
     * @Groups("notes:write")
     * @SerializedName("message")
     */
    public function setTextMessage(?string $message): self
    {
        $this->message = nl2br($message);

        return $this;
    }

    public function setMessage($message): void
    {
        $this->message = $message;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function getIsPublic(): ?bool
    {
        return $this->isPublic;
    }

    public function setIsPublic(bool $isPublic = false): self
    {
        $this->isPublic = $isPublic;

        return $this;
    }
}
