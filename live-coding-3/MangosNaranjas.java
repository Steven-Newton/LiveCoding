/**
 * 
 */
package livecoding;

/**
 * @author Steven
 *
 */
public class MangosNaranjas {
	int Mangos;
	int Naranjas;
	int Cajas;
	
	public MangosNaranjas(int mangos, int naranjas) {
		super();
		Mangos = mangos;
		Naranjas = naranjas;
		Cajas = gcd(naranjas,mangos);
	}

	public void imprimir() {
		System.out.println("El número de cajas es:"+Cajas+" El número de mangos en una caja es: "+(Mangos/Cajas)+" El número de naranjas en una caja es: "+ (Naranjas/Cajas));
	}
	private int gcd(int a,int b){
		int ans = 0;
		if(a>=b) {
			int i=b;
			while(ans==0&&i!=0) {
				if(a%i==0&&b%i==0) {
					ans = i;
				}
				i--;
			}
		}else{
			int i=a;
			while(ans==0&&i!=0) {
				if(a%i==0&&b%i==0) {
					ans = i;
				}
				i--;
			}
		}
		return ans;
	}
}
