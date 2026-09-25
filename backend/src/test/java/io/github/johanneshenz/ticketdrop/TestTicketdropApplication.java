package io.github.johanneshenz.ticketdrop;

import org.springframework.boot.SpringApplication;

public class TestTicketdropApplication {

	public static void main(String[] args) {
		SpringApplication.from(TicketdropApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
