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
	    while (true) {
	        System.out.println("Deseja jogar contra um amigo ou contra o ROBO? 1 = Amigo | 2 = ROBO | 3 = Sair");
	        tabuleiro.limparTabuleiro();
	        if (lerTeclado.hasNextInt()) {
	            escolha = lerTeclado.nextInt();
	            if (escolha == 1 || escolha == 2) {
	                vez = jogador.jogadorVez();
	                Jogada();
	            } 
	            else if(escolha == 3) {
	            	return;
	            } 
	            else {
	                System.out.println("Por favor, digite uma opção válida!");
	            }
	        } else {
	            System.out.println("Por favor, digite um número inteiro!");
	            lerTeclado.nextLine();
	        }
	    }
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
		posicao = lerTeclado.nextInt() - 1;
		verificarPosicao();
	}
	
	private void verificarPosicao() {
		if(posicao < 0 || posicao > 8 || tabuleiro.tabuleiro[posicao] != " ") {
			System.out.println("Posição inválida. Tente novamente.");
			Jogada();
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
