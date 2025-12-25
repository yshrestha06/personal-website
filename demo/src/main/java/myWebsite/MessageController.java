package myWebsite;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {
  
  private final MessageRepository repo;

  public MessageController(MessageRepository repo){
    this.repo = repo;
  }

  @PostMapping
  public Message create(@RequestBody Message msg) {
    return repo.save(msg);
  }

  @GetMapping
  public List<Message> all() {
    return repo.findAll();
  }
}
