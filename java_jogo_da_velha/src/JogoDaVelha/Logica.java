package JogoDaVelha;
import java.util.Scanner;

public class Logica {
	
	private Scanner lerTeclado = new Scanner(System.in);
	
	Tabuleiro tabuleiro = new Tabuleiro();
	Jogador jogador = new Jogador();
	Robo robo = new Robo();
	
	private String vez = "X";
	private int escolha;
	private int posicao;
	
	public void jogo() {
		System.out.println("Deseja jogar contra um amigo ou contra o ROBO? 1 = Amigo | 2 = ROBO");
		escolha = lerTeclado.nextInt();
		vez = jogador.jogadorVez();
		Jogada();
	}
	
	private void Jogada() {
		System.out.println("Vez do jogador: " + vez);
		tabuleiro.exibirTabuleiro();
		
		if(escolha == 2) {
			if(vez == "O") {
				lerTeclado();			
			}
			else {
				posicao = robo.gerarNumero();
				verificarPosicao();
			}
		}
		else {
			lerTeclado();
		}
	}
	
	private void lerTeclado() {
		System.out.println("Qual posição do tabuleiro você deseja jogar?");
		posicao = lerTeclado.nextInt();
		verificarPosicao();
	}
	
	private void verificarPosicao() {
		if(posicao < 0 || posicao > 8 || tabuleiro.tabuleiro[posicao] != " ") {
			System.out.println("Posição inválida. Tente novamente.");
			lerTeclado();
		}
		else {
			tabuleiro.tabuleiro[posicao] = vez;
			if(tabuleiro.verificaEmpate()) {
				tabuleiro.exibirTabuleiro();
				System.out.println("O jogo empatou!");
			}
			else if(tabuleiro.verificaVitoria(vez)) {
				tabuleiro.exibirTabuleiro();
				System.out.println("Jogador '" + vez + "' ganhou!");
			}
			else {
				vez = jogador.jogadorVez();
				Jogada();
			}
		}
	}
}
