package JogoDaVelha;

public class Tabuleiro {

	public String[] tabuleiro = {" ", " ", " ", " ", " ", " ", " ", " ", " "};
    
    public void exibirTabuleiro() {
    	 System.out.println(tabuleiro[0] + " | " + tabuleiro[1] + " | " + tabuleiro[2]);
         System.out.println("------------");
         System.out.println(tabuleiro[3] + " | " + tabuleiro[4] + " | " + tabuleiro[5]);
         System.out.println("------------");
         System.out.println(tabuleiro[6] + " | " + tabuleiro[7] + " | " + tabuleiro[8]);
    }
    
    public void limparTabuleiro() {
    	for(int i = 0; i < 9; i++) {
    		tabuleiro[i] = " ";
    	}
    }
    
    public boolean verificaEmpate() {
    	for (int i = 0; i < 9; i++) {
            if (tabuleiro[i] == " ") {
                return false;
            }
        }
        return true;
    }
    
    public boolean verificaVitoria(String jogador) {
    	//Verificação linhas
    	if(tabuleiro[0] == jogador && tabuleiro[1] == jogador && tabuleiro[2] == jogador) {
    		return true;
    	}
    	if(tabuleiro[3] == jogador && tabuleiro[4] == jogador && tabuleiro[5] == jogador) {
    		return true;
    	}
    	if(tabuleiro[6] == jogador && tabuleiro[7] == jogador && tabuleiro[8] == jogador) {
    		return true;
    	}
    	//Verificação colunas
    	if(tabuleiro[0] == jogador && tabuleiro[3] == jogador && tabuleiro[6] == jogador) {
    		return true;
    	}
    	if(tabuleiro[1] == jogador && tabuleiro[4] == jogador && tabuleiro[7] == jogador) {
    		return true;
    	}
    	if(tabuleiro[2] == jogador && tabuleiro[5] == jogador && tabuleiro[8] == jogador) {
    		return true;
    	}
    	//Verificação diagonais
    	if(tabuleiro[0] == jogador && tabuleiro[4] == jogador && tabuleiro[8] == jogador) {
    		return true;
    	}
    	if(tabuleiro[2] == jogador && tabuleiro[4] == jogador && tabuleiro[6] == jogador) {
    		return true;
    	}
    	else {
    		return false;
    	}
    }
    
}
