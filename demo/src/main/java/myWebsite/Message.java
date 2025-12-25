package myWebsite;

import jakarta.persistence.*;
import java.time.Instant;

//@Entity tells JPA that the class should be stored in the database
@Entity
public class Message {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String email;

  @Column(length = 4000)
  private String message;

  private Instant createdAt = Instant.now();

  public Long getID() { return id;}
  public String getName() {return name;}
  public String getEmail() { return email;}
  public String getMessage() {return message;}
  public Instant getCreatedAt() { return createdAt;}

  public void setName(String name) { this.name = name;}
  public void setEmail(String email) { this.email = email;}
  public void setMessage(String message) { this.message = message;}


}
