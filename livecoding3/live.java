/**
 * 
 */
package livecoding;

import java.util.Scanner;

/**
 * @author Steven
 *
 */ 
public class live {
	 public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("ingrese numero de naranjas y de mangos");
		int a = scan.nextInt();
		int b = scan.nextInt();
		scan.close();
		MangosNaranjas mn = new MangosNaranjas(a,b);
		mn.imprimir();
	}

	
}
