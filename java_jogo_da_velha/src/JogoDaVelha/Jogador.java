package JogoDaVelha;

public class Jogador {
	
	public String jogador = "X";
	
	public String jogadorVez() {
		if(jogador == "X") {
			jogador = "O";
		} else {
			jogador = "X";
		}
		return jogador;
	}

}
