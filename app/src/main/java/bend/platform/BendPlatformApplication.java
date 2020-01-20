package bend.platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BendPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(BendPlatformApplication.class, args);
	}

}
