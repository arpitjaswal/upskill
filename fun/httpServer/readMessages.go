package main
import ("os"
	"log")

func readFile(file string){
	data, err := os.ReadFile(file)
	if err != nil{
		log.Fatal(err)
	}	
	os.Stdout.Write(data)

}

func main(){
	//test case 1
	readFile("messages.txt")
	readFile("test.txt")
}


