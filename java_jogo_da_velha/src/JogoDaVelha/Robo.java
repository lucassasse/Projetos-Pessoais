package JogoDaVelha;

import java.util.Random;

public class Robo {
	
Random random = new Random();
	
	public int gerarNumero() {
		int numero = random.nextInt(8);
		return numero;
	}

}
